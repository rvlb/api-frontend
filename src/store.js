import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import * as api from './api';

export default (reducer) => createStore(
    reducer, 
    applyMiddleware(ReduxThunk.withExtraArgument({ api }))
);