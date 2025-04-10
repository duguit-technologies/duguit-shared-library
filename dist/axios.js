import axios from 'axios';
import { useAuthStore } from "../src/stores/auth";
// Configurer l'URL de base
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});
// interceptor pour gérer les token
api.interceptors.request.use(async (config) => {
    if (config.url !== '/login/refresh') {
        const auth = useAuthStore();
        const local_token = localStorage.getItem('access_token');
        if (local_token && !auth.isTokenExpired(local_token)) {
            config.headers.Authorization = `Bearer ${local_token}`;
        }
        else if (local_token && auth.isTokenExpired(local_token)) {
            const newAccessToken = await auth.refreshAccessToken();
            if (!newAccessToken) {
                console.log('Impossible de rafraîchir le token, déconnexion...');
                await auth.logout();
            }
            config.headers.Authorization = `Bearer ${newAccessToken}`;
        }
        else {
            await auth.logout();
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
export default api;
