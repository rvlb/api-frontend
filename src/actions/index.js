import actions from './types';
import api from '../api';

export const login = (username, password) => (
    (dispatch) => {
        api.login(username, password)
            .then((response) => {
                dispatch({
                    type: actions.LOGIN,
                    payload: response
                })
            })
            .catch((error) => {
                dispatch({
                    type: actions.ERROR,
                    payload: error
                })
            });
    }
);