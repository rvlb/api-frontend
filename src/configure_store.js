import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

export default (reducer) => {
    const store = createStore(reducer, applyMiddleware(ReduxThunk));
    return store;
}