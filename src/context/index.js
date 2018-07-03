import * as React from 'react';
import tabDefaultValue from './Tab';
import GlobalContext from './GlobalContext';

export function createContext(title, defaultValue) {
    const storageKey = `context-${title}`;
    const context = React.createContext(defaultValue);
    context.storageKey = storageKey;
    context.title = title;
    const stored = localStorage.getItem(storageKey);
    if (stored === null) {
        context.value = defaultValue;
        localStorage.setItem(storageKey, JSON.stringify(defaultValue));
    } else {
        context.value = JSON.parse(stored);
    };
    console.log('Created context:', context);
    return context;
}

const TabContext = createContext('tab', tabDefaultValue);

const globalContext = new GlobalContext();

export default globalContext;

export {
    GlobalContext,
    TabContext,
};