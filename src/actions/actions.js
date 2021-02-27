import {ACCOUNT_REGISTRATION, CLEAR_STORE, SERVER_CRASH} from "./action-types";
import {CURRENT_USER} from "./action-types";
import {CONFIRM_LOGIN} from "./action-types";
import {CANCEL_EDIT} from "./action-types";
import {EDIT_PROFILE} from "./action-types";


export const userPostFetch = user => {
    return async dispatch => {
        try {
            let response = await fetch('https://prozorro.mavinx.com/api/test/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(user)
            });
            let result = await response.json();
            dispatch(confirmRegistration(result))
        } catch (error) {
            dispatch(serverCrash());
        }
    };
};

export const userLoginFetch = user => {

    return async dispatch => {
        try {
            let response = await fetch('https://prozorro.mavinx.com/api/test/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(user)
            });
            console.log(response);
            let result = await response.json();
            console.log(result);
            dispatch(confirmLogin(result))
        } catch (error) {
            dispatch(serverCrash())
        }
    };
};

export const editProfile = user => {
    return async dispatch => {
        try {
            let response = await fetch('https://prozorro.mavinx.com/api/test/edit-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: localStorage.token
                },
                body: JSON.stringify(user)
            });
            let result = await response.json();
            dispatch(confirmEdit(result))
        } catch (error) {
            dispatch(serverCrash())
        }
    };
};

export function confirmRegistration(payload) {
    return {type: ACCOUNT_REGISTRATION, payload}
}

export function confirmEdit(payload) {
    return {type: EDIT_PROFILE, payload}
}

export function clearStore() {
    return {type: CLEAR_STORE}
}

export function confirmLogin(payload) {
    return {type: CONFIRM_LOGIN, payload}
}

export function serverCrash() {
    return {type: SERVER_CRASH}
}


export function currentUser(payload) {
    return {type: CURRENT_USER, payload}
}