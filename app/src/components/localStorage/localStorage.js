class SiteStorage {
    get(item) {
        const storage = localStorage.getItem(item);
        return storage !== 'undefined' ? storage : undefined;
    }

    set(name, value) {
        localStorage.setItem(name, value);
    }

    clear(item) {
        localStorage.clear(item);
    }
}

const siteStorage = new SiteStorage();
export default siteStorage;