import ReactDOM from 'react-dom';
import React from 'react';
import PlacesApp from './components/PlacesApp.jsx';
import { Provider } from 'react-redux';
import store from './store';


import './assets/globalStyles.css';

ReactDOM.render(
    <Provider store={store}>
        <PlacesApp/>
    </Provider>,
    document.getElementById('root')
);
