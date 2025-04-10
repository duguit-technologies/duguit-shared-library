// src/composables/useToast.js
import { ref } from 'vue';
const toasts = ref([]);
export function useToast() {
    const createToast = (type, message) => {
        const id = Date.now();
        toasts.value.push({ id, type, message });
        console.log('Toast : ' + toasts.value);
        // Retirer automatiquement le toast après 5 secondes
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    };
    const removeToast = (id) => {
        toasts.value = toasts.value.filter((toast) => toast.id !== id);
    };
    return {
        toasts,
        createToast,
        removeToast,
    };
}
