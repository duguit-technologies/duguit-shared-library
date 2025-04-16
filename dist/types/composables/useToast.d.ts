import type { ToastType } from "../types/type";
export declare function useToast(): {
    toasts: import("vue").Ref<{
        id: number;
        type: string;
        message: string;
    }[], ToastType[] | {
        id: number;
        type: string;
        message: string;
    }[]>;
    createToast: (type: string, message: string) => void;
    removeToast: (id: number) => void;
};
