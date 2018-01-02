import actions from '../actions/types';

export const loginSuccess = (state = '', action) => {
    switch(action.type) {
        case actions.LOGIN:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

export const loginError = (state = {}, action) => {
    switch(action.type) {
        case actions.LOGIN_ERROR:
            alert(action.payload);
            return state;
        default:
            return state;
    }
}