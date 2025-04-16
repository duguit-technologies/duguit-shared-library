import type { User } from "../types/type";
export declare const useAuthStore: import("pinia").StoreDefinition<"auth", Pick<{
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    loginByToken: () => Promise<void>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<boolean>;
    getUserHighestRolePermission: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    logout: () => Promise<void>;
}, "current_user">, Pick<{
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    loginByToken: () => Promise<void>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<boolean>;
    getUserHighestRolePermission: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    logout: () => Promise<void>;
}, never>, Pick<{
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    loginByToken: () => Promise<void>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<boolean>;
    getUserHighestRolePermission: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    logout: () => Promise<void>;
}, "loginByToken" | "fetchCurrentLoggedInUser" | "refreshAccessToken" | "getUserHighestRolePermission" | "getCurrentUser" | "logout">>;
