import type { User } from "../types/type";
export declare const useAuthStore: import("pinia").StoreDefinition<"auth", Pick<{
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    isAuthenticated: import("vue").Ref<boolean, boolean>;
    setRootUrl: (newUrl: string) => Promise<void>;
    login: (username: string, password: string) => Promise<boolean>;
    loginByToken: () => Promise<boolean>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<boolean>;
    getUserHighestRolePermission: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    logout: () => Promise<void>;
    checkAuthenticated: () => boolean;
    checkAuthByCookie: () => Promise<boolean>;
}, "current_user" | "isAuthenticated">, Pick<{
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    isAuthenticated: import("vue").Ref<boolean, boolean>;
    setRootUrl: (newUrl: string) => Promise<void>;
    login: (username: string, password: string) => Promise<boolean>;
    loginByToken: () => Promise<boolean>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<boolean>;
    getUserHighestRolePermission: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    logout: () => Promise<void>;
    checkAuthenticated: () => boolean;
    checkAuthByCookie: () => Promise<boolean>;
}, never>, Pick<{
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    isAuthenticated: import("vue").Ref<boolean, boolean>;
    setRootUrl: (newUrl: string) => Promise<void>;
    login: (username: string, password: string) => Promise<boolean>;
    loginByToken: () => Promise<boolean>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<boolean>;
    getUserHighestRolePermission: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    logout: () => Promise<void>;
    checkAuthenticated: () => boolean;
    checkAuthByCookie: () => Promise<boolean>;
}, "setRootUrl" | "login" | "loginByToken" | "fetchCurrentLoggedInUser" | "refreshAccessToken" | "getUserHighestRolePermission" | "getCurrentUser" | "logout" | "checkAuthenticated" | "checkAuthByCookie">>;
