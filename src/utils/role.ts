import jsonRole from '../json/role.json';
import type {Privilege, RoleCreate} from '@/types/type';

// Retourne une copie (ici shallow copy) de l'objet par défaut
export function createDefaultRole(): RoleCreate {
    // Pour une copie profonde, vous pouvez utiliser JSON.parse(JSON.stringify(...))
    return { ...jsonRole.role };
}

export function createDefaultPrivilege(): Privilege {
    // Pour une copie profonde, vous pouvez utiliser JSON.parse(JSON.stringify(...))
    return { ...jsonRole.privilege };
}