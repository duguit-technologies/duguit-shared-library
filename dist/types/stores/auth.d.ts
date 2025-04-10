import type { User } from "../types/type";
export declare const useAuthStore: import("pinia").StoreDefinition<"auth", Pick<{
    access_token: import("vue").Ref<string | null, string | null>;
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    loginByToken: () => Promise<void>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<string | false>;
    isTokenExpired: (token: string) => boolean;
    setTokens: (newAccessToken: string, newRefreshToken: string) => void;
    getUserHighestRolePermission: () => Promise<any>;
    getCurrentUser: () => Promise<User | null | undefined>;
    logout: () => Promise<void>;
}, "access_token" | "current_user">, Pick<{
    access_token: import("vue").Ref<string | null, string | null>;
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    loginByToken: () => Promise<void>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<string | false>;
    isTokenExpired: (token: string) => boolean;
    setTokens: (newAccessToken: string, newRefreshToken: string) => void;
    getUserHighestRolePermission: () => Promise<any>;
    getCurrentUser: () => Promise<User | null | undefined>;
    logout: () => Promise<void>;
}, never>, Pick<{
    access_token: import("vue").Ref<string | null, string | null>;
    current_user: import("vue").Ref<{
        [x: string]: any;
        id?: number | undefined;
    } | null, User | {
        [x: string]: any;
        id?: number | undefined;
    } | null>;
    loginByToken: () => Promise<void>;
    fetchCurrentLoggedInUser: () => Promise<User | null>;
    refreshAccessToken: () => Promise<string | false>;
    isTokenExpired: (token: string) => boolean;
    setTokens: (newAccessToken: string, newRefreshToken: string) => void;
    getUserHighestRolePermission: () => Promise<any>;
    getCurrentUser: () => Promise<User | null | undefined>;
    logout: () => Promise<void>;
}, "loginByToken" | "fetchCurrentLoggedInUser" | "refreshAccessToken" | "isTokenExpired" | "setTokens" | "getUserHighestRolePermission" | "getCurrentUser" | "logout">>;
