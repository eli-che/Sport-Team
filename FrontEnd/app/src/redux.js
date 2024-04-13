import { combineReducers } from "redux";

// actions.js
export const login = user => ({
    type: "LOGIN",
    user: user
});

export const logout = () => ({
    type: "LOGOUT"
});

// reducers.js
const initialState = {
    user: {},
    loggedIn: false
};

// accessToken is the same as idToken
function auth(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                loggedIn: true,
                user: action.user
            };
        case "LOGOUT":
            return Object.assign({}, state, {
                loggedIn: false,
                user: null
            });
        default:
            return state;
    }
}

export const reducers = combineReducers({
    auth
});
