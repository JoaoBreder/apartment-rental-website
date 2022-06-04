import siteStorage from "../../service/localStorage/localStorage";


export function getItem(key) {
    const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

    return cookies[key];
}

export function isAuthenticated() {
    const user = siteStorage.get('user');
    return user ? true : false;
}