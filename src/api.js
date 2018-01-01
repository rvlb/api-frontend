import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const ROOT_URL = 'http://localhost:8000';

export default {
    login: function(username, password) {
        const url = `${ROOT_URL}/get_auth_token/`;
        return axios.post(url, { username, password });
    }
}