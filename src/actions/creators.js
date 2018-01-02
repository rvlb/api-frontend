import api from './api';
import { loginSuccess, loginError } from './';

export const login = (username, password) => (
    (dispatch) => {
        api.login(username, password)
            .then((response) => dispatch(loginSuccess(response.data.token)))
            .catch((error) => dispatch(loginError(error)));
    }
);