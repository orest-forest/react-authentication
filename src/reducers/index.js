import {ACCOUNT_REGISTRATION} from "../actions/action-types";
import {SERVER_CRASH} from "../actions/action-types";
import {CLEAR_STORE} from '../actions/action-types';
import {CONFIRM_LOGIN} from "../actions/action-types";
import {CURRENT_USER} from "../actions/action-types";
import {EDIT_PROFILE} from "../actions/action-types";

const initialState = {};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_REGISTRATION:
            return {...state, messageFromServer: action.payload};
        case CLEAR_STORE:
            return {};
        case SERVER_CRASH:
            return {messageFromServer: {message: 'error'}};
        case CONFIRM_LOGIN:
            return {
                token: action.payload.token, message: action.payload.message,
                status: action.payload.status,
                user: action.payload.user,
                errors: action.payload.errors
            };
        case CURRENT_USER:
            return {currentUser: action.payload};
        case EDIT_PROFILE:
            return {currentUser: action.payload};
        default:
            return state;
    }
}

export default rootReducer;