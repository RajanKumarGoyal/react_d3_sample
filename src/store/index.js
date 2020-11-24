import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middelware = [ thunk ];

const store = createStore( rootReducers, initialState, composeWithDevTools(applyMiddleware(...middelware)) );
export default store;