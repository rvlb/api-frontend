import api from '../api';
import { loginSuccess, loginError } from '../actions';

export const login = (username, password) => (
    (dispatch) => {
        api.login(username, password)
            .then((response) => dispatch(loginSuccess(response.data.token)))
            .catch((error) => dispatch(loginError(error)));
    }
);