import { createStore, applyMiddleware } from 'redux';
import address from '../reducers';
import {createLogger} from "redux-logger";

// const address = createStore(address, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default address;
// const store = createStore(address, applyMiddleware(createLogger()));
const store = createStore(address, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
