class SiteStorage {
    get(item) {
        const storage = localStorage.getItem(item);
        return storage !== 'undefined' ? storage : undefined;
    }

    set(name, value) {
        localStorage.setItem(name, value);
    }
}

const siteStorage = new SiteStorage();
export default siteStorage;