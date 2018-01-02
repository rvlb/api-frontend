import actions from './types';
import * as creators from './thunks';

// Export action creators
export const login = creators.login;

// Export actions
export const loginSuccess = (payload) => ({ type: actions.LOGIN, payload });
export const loginError = (payload) => ({ type: actions.LOGIN_ERROR, payload });