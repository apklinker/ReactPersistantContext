import * as React from 'react';
import tabDefaultValue from './Tab';
import GlobalContext from './GlobalContext';

const globalContext = new GlobalContext();

export function createContext(title, defaultValue) {
    const storageKey = `context-${title}`;
    const context = React.createContext(defaultValue);
    context.storageKey = storageKey;
    context.title = title;
    const stored = globalContext.storage.getItem(storageKey);
    if (stored === null) {
        context.value = defaultValue;
        globalContext.storage.setItem(storageKey, defaultValue);
    } else {
        context.value = stored;
    };
    console.log('Created context:', context);
    return context;
}

const TabContext = createContext('tab', tabDefaultValue);

export {
    GlobalContext,
    TabContext,
};

export default globalContext;