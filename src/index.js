import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {provider} from 'react-redux';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

function reducer() {
    return {
        title: 'This is in the Redux Store'
    }
}
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement
);
