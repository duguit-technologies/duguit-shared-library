// src/composables/useToast.js
import { ref } from 'vue';
import type {Toast} from "../types/type";

const toasts = ref<Toast[]>([]);


export function useToast() {
    const createToast = (type: string, message: string) => {
        const id = Date.now();
        toasts.value.push({ id, type, message });

        // Retirer automatiquement le toast après 5 secondes
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    };

    const removeToast = (id: number) => {
        toasts.value = toasts.value.filter((toast) => toast.id !== id);
    };

    return {
        toasts,
        createToast,
        removeToast,
    };
}