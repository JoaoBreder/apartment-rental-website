import siteStorage from "../localStorage/localStorage";


export function saveUser(user) {
    siteStorage.set('user', JSON.stringify(user));
}

export function getUserType() {
    const user = siteStorage.get('user');
    return user.tipo === 'L' ? 'Locador' : 'Gerente';
}

export function isAuthenticated() {
    const user = siteStorage.get('user');
    return user ? true : false;
}