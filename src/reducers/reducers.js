import { combineReducers } from "redux";

import { SET_MOVIES, SET_FILTER, SET_USER } from "../actions/actions";

function visibilityFilter(state = '', action) { //identity card
    switch (action.type) { //if the given action is unrelated to the reducer, then it should return whatever state it’s been given 
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        default:
            return state;
    }
}

function user(state = [], action) {
    switch (action.type) {
        case SET_USER:
            return action.value;
        default:
            return state;
    }
}

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    user
});

export default moviesApp;