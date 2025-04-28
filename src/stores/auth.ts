import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '../axios';
import { useRouter } from "vue-router";
import type { User } from "../types/type";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();
    const current_user = ref<User | null>(null);
    const hasTriedRefreshToken = ref(false);
    const isAuthenticated = ref(false);

    // URL racine qui peut être configurée
    let rootUrl: string = "";

    const setRootUrl = async (newUrl: string) => {
        rootUrl = newUrl;
    };

    // Fonction pour savoir si l'utilisateur est authentifié
    const checkAuthenticated = (): boolean => {
        return isAuthenticated.value;
    };

    // Vérifie l'authentification par cookie
    const checkAuthByCookie = async (): Promise<boolean> => {
        try {
            const response = await api.post('/login/login_by_token', {}, {
                withCredentials: true // Important pour envoyer les cookies
            });

            if (response.status === 200 && response.data.user_detail) {
                current_user.value = response.data.user_detail;
                isAuthenticated.value = true;
                await getUserHighestRolePermission();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erreur lors de la vérification par cookie:', error);
            // Si échec, on essaie de rafraîchir l'access token
            if (!hasTriedRefreshToken.value) {
                hasTriedRefreshToken.value = true;
                const refreshed = await refreshAccessToken();
                if (refreshed) {
                    return await checkAuthByCookie();
                }
            }
            return false;
        }
    };

    // Login - envoie les identifiants et le backend définira les cookies
    const login = async (username: string, password: string): Promise<boolean> => {
        try {
            const params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);

            const response = await api.post('/login', params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true // Important pour recevoir les cookies
            });

            if (response.status === 200) {
                isAuthenticated.value = true;
                current_user.value = response.data.user_detail || null;

                // Stockage éventuel des infos non sensibles en sessionStorage
                if (response.data.user_id) {
                    sessionStorage.setItem('user_id', response.data.user_id.toString());
                }

                return true;
            }
            return false;
        } catch (error) {
            console.error('Erreur de connexion:', error);
            return false;
        }
    };

    const loginByToken = async (): Promise<boolean> => {
        return await checkAuthByCookie();
    };

    const fetchCurrentLoggedInUser = async (): Promise<User | null> => {
        try {
            const response = await api.get('/user/me', {
                withCredentials: true // S'assure que les cookies sont envoyés
            });

            if (response?.data) {
                console.log("fetch current loggedin");
                console.log(response.data);
                current_user.value = response.data;
                isAuthenticated.value = true;
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
            // Le backend gère le rafraîchissement et la mise à jour des cookies
            const response = await api.post('/login/refresh', {}, {
                withCredentials: true
            });

            return response.status === 200;
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
            const response = await api.get(
                `/role/get_highest_privilege_for_each_action_based_on_user_role/${current_user.value.id}`,
                { withCredentials: true }
            );

            current_user.value.privilege = response.data;
            sessionStorage.setItem('privileges', JSON.stringify(response.data));
        } catch (e) {
            console.error('Erreur récupération privilèges :', e);
        }
    };

    const logout = async () => {
        try {
            // Réinitialiser l'état local
            current_user.value = null;
            isAuthenticated.value = false;
            hasTriedRefreshToken.value = false;
            sessionStorage.removeItem('privileges');
            sessionStorage.removeItem('user_id');

            // Appeler le backend pour supprimer les cookies
            const response = await api.post('/login/logout', {}, {
                withCredentials: true
            });

            if (response.status === 200) {
                window.location.href = rootUrl;
            } else {
                console.warn("Logout échoué côté serveur, mais on continue le reset local.");
                window.location.href = rootUrl;
            }
        } catch (error) {
            console.error("Erreur lors du logout :", error);
            // On redirige quand même
            window.location.href = rootUrl;
        }
    };

    const getCurrentUser = async (): Promise<User | null> => {
        // Si on est déjà connecté, on retourne l'utilisateur
        if (checkAuthenticated() && current_user.value) {
            if (!current_user.value.privilege) {
                await getUserHighestRolePermission();
            }
            return current_user.value;
        }

        // Sinon on essaie d'abord de s'authentifier par cookie
        const cookieAuth = await checkAuthByCookie();
        if (cookieAuth) {
            return current_user.value;
        }

        // Si ça échoue, on essaie de récupérer l'utilisateur normalement
        return await fetchCurrentLoggedInUser();
    };

    return {
        current_user,
        isAuthenticated,
        setRootUrl,
        login,
        loginByToken,
        fetchCurrentLoggedInUser,
        refreshAccessToken,
        getUserHighestRolePermission,
        getCurrentUser,
        logout,
        checkAuthenticated,
        checkAuthByCookie
    };
});