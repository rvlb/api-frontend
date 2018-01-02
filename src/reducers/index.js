import { combineReducers } from 'redux';
import * as auth from './auth_reducers';

const rootReducer = combineReducers({ ...auth });

export default rootReducer;