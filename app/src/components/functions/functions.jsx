export function getItem(key) {
    const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

    return cookies[key];
}

export function isAuthenticated() {
    const auth = getItem('isAuthenticated') === 'true';
    return auth;
}