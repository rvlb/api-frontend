import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

export default () => {
    const store = createStore(
        reducer,
        applyMiddleware(ReduxThunk)
    );
    return store;
}