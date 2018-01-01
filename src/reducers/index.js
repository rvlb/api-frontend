import { combineReducers } from 'redux';

import actions from '../actions/types';

const rootReducer = combineReducers({
    login: function(state = {}, action) {
        switch(action.type) {
            case actions.LOGIN:
                console.log(action.payload.data);
                return state;
            case actions.ERROR:
                alert(action.payload);
                return state;
            default:
                return state;
        }
    }
});

export default rootReducer;