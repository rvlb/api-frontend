import actions from '../actions/types';

export default function(state = '', action) {
    switch(action.type) {
        case actions.LOGIN:
            console.log(action.payload.data)
            return state;
        case actions.ERROR:
            alert(action.payload);
            return state;
        default:
            return state;
    }
}