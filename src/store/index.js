import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
import rootState from './state';

const store = createStore(rootReducer, rootState, applyMiddleware(thunk));

export default store;