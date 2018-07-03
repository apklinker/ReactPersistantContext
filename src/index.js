import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import globalContext, { TabContext } from './context';

const app = <App />
globalContext.setup([TabContext], app);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
