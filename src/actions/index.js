import actions from './types';

export const loginSuccess = (payload) => ({ type: actions.LOGIN, payload });
export const loginError = (payload) => ({ type: actions.LOGIN_ERROR, payload });