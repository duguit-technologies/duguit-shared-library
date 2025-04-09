// stores/spinnerStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSpinnerStore = defineStore('spinner', () => {
    const isVisible = ref(false);

    function showSpinner() {
        isVisible.value = true;
    }

    function hideSpinner() {
        isVisible.value = false;
    }

    return { isVisible, showSpinner, hideSpinner };
});