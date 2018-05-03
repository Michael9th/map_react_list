import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import address from '../reducers';
import {createLogger} from "redux-logger";

// const address = createStore(address, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default address;
// const store = createStore(address, applyMiddleware(createLogger()));
// const fromMiddleWithThunk = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(address, composeEnhancers(applyMiddleware(thunk)));
export default store;
