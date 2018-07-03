import LocalStorage from './LocalStorage';

export default class MockLocalStorage extends LocalStorage {
    setItem(key, value) {
        this[key] = value;
    }

    getItem(key) {
        return this[key];
    }

    removeItem(key) {
        delete this[key];
    }

    clear() {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                delete this[key];
            }
        }
    }

}