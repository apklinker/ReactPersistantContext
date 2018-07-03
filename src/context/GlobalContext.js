import LocalStorage from './LocalStorage';

export default class GlobalContext {

    storage = new LocalStorage();
    
    setup(contexts, setGlobalStateCallback, storage) {
        if (storage !== undefined) this.storage = storage;
        for (var i = 0; i < contexts.length; i++) {
            this.set(contexts[i].title, contexts[i]);
        }
        this.setGlobalState = setGlobalStateCallback;
    }

    set(key, value) {
        this[key] = value;
    }

    getContext(key) {
        return this[key];
    }

    getContextValue(context) {
        return this.getContext(context.title).value;
    }

    getValues() {
        var result = {};
        for (var key in this) {
            if (this.hasOwnProperty(key) && key !== 'setGlobalState') {
                result[key] = this.getContextValue({ title: key });
            }
        }
        return result;
    }

    save(appState) {
        for (var key in this) {
            if (this.hasOwnProperty(key) && key !== 'setGlobalState') {
                let context = this.getContext(key);
                let contextValues = appState[key]; // use new state values, not ones currently stored in the local storeage
                let storageKey = context.storageKey;
                console.log('saving: ', storageKey, contextValues);
                this.storage.setItem(storageKey, contextValues);
            }
        }
    }
}