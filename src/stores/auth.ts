import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '../axios';
import { useRouter } from "vue-router";
import {jwtDecode} from 'jwt-decode';
import type {DecodedToken, User} from "../types/type";



export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    // const access_token = ref<string | null>(localStorage.getItem('access_token'));
    // const refresh_token = ref<string | null>(localStorage.getItem('refresh_token'));
    const current_user = ref<User | null>(null);
    const hasTriedRefreshToken = ref(false);
    const rootUrl : string = "http://app.duguit.dev:5173"

    // Fonction pour mettre à jour les tokens
    // const setTokens = (newAccessToken: string, newRefreshToken: string) => {
    //     access_token.value = newAccessToken;
    //     refresh_token.value = newRefreshToken;
    //     localStorage.setItem('access_token', newAccessToken);
    //     localStorage.setItem('refresh_token', newRefreshToken);
    // };

    const loginByToken = async () => {
        try {
            const response = await api.post('/login/login_by_token');
            if (response.data.user_detail) {
                current_user.value = response.data.user_detail;
                await getUserHighestRolePermission();
                await router.push('/interventions');
            }
        } catch (e: any) {
            if (!hasTriedRefreshToken.value) {
                hasTriedRefreshToken.value = true;
                const refreshed = await refreshAccessToken();
                if (refreshed) {
                    await loginByToken();
                } else {
                    await logout();
                }
            } else {
                console.warn("Échec de rafraîchissement déjà tenté. Déconnexion.");
                await logout();
            }
        }
    };

    const fetchCurrentLoggedInUser = async (): Promise<User | null> => {
        try {
            const response = await api.get('/user/me'); // utilise automatiquement le cookie
            if (response?.data) {
                current_user.value = response.data;
                await getUserHighestRolePermission();
                return current_user.value;
            } else {
                console.warn('Utilisateur introuvable');
                await logout();
                return null;
            }
        } catch (e: any) {
            if (e.response?.status === 401) {
                const refreshed = await refreshAccessToken();
                if (refreshed) {
                    return await fetchCurrentLoggedInUser();
                }
            }
            console.error('Erreur récupération utilisateur :', e);
            await logout();
            return null;
        }
    };

    const refreshAccessToken = async (): Promise<boolean> => {
        try {
            await api.post('/login/refresh');
            return true;
        } catch (error) {
            console.error('Impossible de rafraîchir le token', error);
            return false;
        }
    };

    const getUserHighestRolePermission = async () => {
        if (!current_user.value) {
            console.log('Aucun utilisateur chargé.');
            return;
        }
        try {
            const response = await api.get(`/role/get_highest_privilege_for_each_action_based_on_user_role/${current_user.value.id}`);
            current_user.value.privilege = response.data;
            sessionStorage.setItem('privileges', JSON.stringify(response.data));
        } catch (e) {
            console.error('Erreur récupération privilèges :', e);
        }
    };

    const logout = async () => {
        try {
            current_user.value = null;
            sessionStorage.removeItem('privileges');

            const response = await api.post('/login/logout');

            if (response.status === 200) {
                window.location.href = rootUrl;
            } else {
                console.warn("Logout échoué côté serveur, mais on continue le reset local.");
                window.location.href = rootUrl;
            }
        } catch (error) {
            console.error("Erreur lors du logout :", error);
            // On redirige quand même, car on a déjà effacé les infos locales
            window.location.href = rootUrl;
        }
    };

    const getCurrentUser = async (): Promise<User | null> => {
        if (!current_user.value) {
            return await fetchCurrentLoggedInUser();
        }
        if (!current_user.value.privilege) {
            await getUserHighestRolePermission();
        }
        return current_user.value;
    };

    // const loginByToken = async () => {
    //     try {
    //         if (access_token.value && refresh_token.value) {
    //             try {
    //                 const response = await api.post('/login/login_by_token', {}, {
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     }
    //                 });
    //                 if (response.data.user_detail) {
    //                     console.log('Connexion via Token\nRedirection vers /interventions');
    //                     await router.push('/interventions'); // Redirige vers la liste des interventions après la connexion
    //                 }
    //             } catch (e: any) {
    //                 if (e.response && e.response.status === 401) {
    //                     if (!hasTriedRefreshToken.value) {
    //                         try {
    //                             await refreshAccessToken();
    //                             hasTriedRefreshToken.value = true;
    //                             await loginByToken();  // Réessayer après avoir rafraîchi le token
    //                         } catch (e: any) {
    //                             console.log('{loginByToken} Une erreur s\'est produite : ' + (e.message || e));
    //                         }
    //                     } else {
    //                         console.log('Tentative de nouvelle connexion infructueuse');
    //                         await logout();
    //                     }
    //                 }
    //             }
    //         } else {
    //             throw new Error('Pas de token dans le stockage local, connexion manuelle requise');
    //         }
    //     } catch (e: any) {
    //         console.log('Une erreur s\'est produite : ' + (e.message || e));
    //     }
    // };


    // const fetchCurrentLoggedInUser = async (): Promise<User | null> => {
    //     try {
    //         if (!access_token.value || isTokenExpired(access_token.value)) {
    //             const newAccessToken = await refreshAccessToken();
    //             if (!newAccessToken) {
    //                 console.log('Impossible de rafraîchir le token, déconnexion...');
    //                 await logout();
    //                 return null;
    //             }
    //         }
    //         if (!access_token.value) {
    //             console.log('Aucun token valide disponible, déconnexion...');
    //             await logout();
    //             return null;
    //         }
    //         const payload: DecodedToken = jwtDecode(access_token.value as string);
    //         if (!payload || !payload.user_id) {
    //             console.log('Token invalide, déconnexion...');
    //             await logout();
    //             return null;
    //         }
    //
    //         const response = await api.get('/user/show_user_ById', {
    //             params: { user_id: payload.user_id },
    //             headers: { Authorization: `Bearer ${access_token.value}` }
    //         });
    //
    //         if (response.data) {
    //             current_user.value = response.data;
    //             await getUserHighestRolePermission();
    //             return current_user.value;
    //         } else {
    //             console.log('Aucune donnée utilisateur trouvée, déconnexion...');
    //             await logout();
    //             return null;
    //         }
    //     } catch (e: any) {
    //         console.log('Erreur lors de la récupération de l\'utilisateur connecté :', (e.message || e));
    //         await logout();
    //         return null;
    //     }
    // };

    // const isTokenExpired = (token: string): boolean => {
    //     try {
    //         const decoded: DecodedToken = jwtDecode(token);
    //         const currentTime = Date.now() / 1000;
    //         return decoded.exp < currentTime;
    //     } catch (e: any) {
    //         console.log('Erreur :', (e.message || e));
    //         return true;
    //     }
    // };
    //
    // const refreshAccessToken = async (): Promise<string | false> => {
    //     hasTriedRefreshToken.value = true
    //     try {
    //         if (!refresh_token.value) {
    //             throw new Error('Refresh token manquant');
    //         }
    //
    //         const response = await api.post('/login/refresh', {}, {
    //             headers: { Authorization: `Bearer ${refresh_token.value}` }
    //         });
    //
    //         if (response.data.access_token) {
    //             const newAccessToken = response.data.access_token;
    //             setTokens(newAccessToken, refresh_token.value);
    //             hasTriedRefreshToken.value = false;
    //             return newAccessToken;
    //         } else {
    //             throw new Error('Aucun access token reçu');
    //         }
    //     } catch (error: any) {
    //         console.error('Erreur lors du rafraîchissement du token', error);
    //         await logout();
    //         return false;
    //     }
    // };
    //
    //
    // const getUserHighestRolePermission = async () => {
    //     if (!current_user.value) {
    //         console.log("Aucun utilisateur en mémoire, impossible de récupérer les privilèges.");
    //         return null;
    //     }
    //     // Si current_user est défini, récupérer les privilèges via l'API
    //     try {
    //         if (current_user.value) {
    //             const response = await api.get(`/role/get_highest_privilege_for_each_action_based_on_user_role/${current_user.value.id}`, {
    //                 headers: { Authorization: `Bearer ${access_token.value}` }
    //             });
    //             if (response.data) {
    //                 current_user.value.privilege = response.data;
    //                 sessionStorage.setItem('privileges', JSON.stringify(response.data));
    //             }
    //             return current_user.value.privilege || null;
    //         }
    //     } catch (e) {
    //         console.error("Erreur lors de la récupération des privilèges :", e);
    //     }
    //
    //     return null;
    // };
    //
    // const logout = async () => {
    //     access_token.value = null;
    //     refresh_token.value = null;
    //     current_user.value = null;
    //     localStorage.removeItem('access_token');
    //     localStorage.removeItem('refresh_token');
    //     sessionStorage.removeItem('privileges');
    //     await router.push(import.meta.env.VITE_DUGUIT_ROOT_APP);
    //     // window.location.href = 'http://app.duguit.local'
    // };
    //
    // // Récupère l'utilisateur en mémoire (si non disponible, lance le fetch)
    // const getCurrentUser = async (): Promise<User | null | undefined> => {
    //     //verifier si le token est expiré et le cas échéant le renouveler
    //     try{
    //         if (!current_user.value) {
    //             hasTriedRefreshToken.value = false;
    //             return await fetchCurrentLoggedInUser();
    //         }
    //         if(!current_user.value.privilege) {
    //             await getUserHighestRolePermission();
    //         }
    //         hasTriedRefreshToken.value = false;
    //         return current_user.value;
    //     }
    //     catch (e) {
    //         console.error("Erreur getCurrentUser :", e);
    //         await logout();
    //     }
    // };


    return {
        // access_token,
        current_user,
        loginByToken,
        fetchCurrentLoggedInUser,
        refreshAccessToken,
        // isTokenExpired,
        // setTokens,
        getUserHighestRolePermission,
        getCurrentUser,
        logout
    };
});
