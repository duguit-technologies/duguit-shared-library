// stores/dateStore.ts
import { defineStore } from 'pinia';
export const useDateFormatter = defineStore('dateFormatter', () => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        // Vérification de la validité de la date
        if (isNaN(date.getTime())) {
            throw new Error("Date invalide");
        }
        const monthNames = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    return { formatDate };
});
