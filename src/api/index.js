import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const ROOT_URL = 'http://localhost:8000';

export const login = (username, password) => (
    axios.post(`${ROOT_URL}/get_auth_token/`, { username, password })
);