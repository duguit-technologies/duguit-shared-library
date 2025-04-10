import jsonRole from '../json/role.json';
// Retourne une copie (ici shallow copy) de l'objet par défaut
export function createDefaultRole() {
    // Pour une copie profonde, vous pouvez utiliser JSON.parse(JSON.stringify(...))
    return { ...jsonRole.role };
}
export function createDefaultPrivilege() {
    // Pour une copie profonde, vous pouvez utiliser JSON.parse(JSON.stringify(...))
    return { ...jsonRole.privilege };
}
