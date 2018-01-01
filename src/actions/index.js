import axios from 'axios';
import actions from './types';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const ROOT_URL = 'http://localhost:8000';

export function login(username, password) {
    const url = `${ROOT_URL}/get_auth_token/`;
    const request = axios.post(url, { username, password });
    return (dispatch) => {
        request
            .then((response) => {
                dispatch({
                    type: actions.LOGIN,
                    payload: response
                });
            })
            .catch((error) => {
                dispatch({
                    type: actions.ERROR,
                    payload: error
                });
            });
    };
}