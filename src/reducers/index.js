import { combineReducers } from 'redux';
import login from './login_reducer';

const rootReducer = combineReducers({
    login
});

export default rootReducer;