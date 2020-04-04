/*==================passing informations to the reducer====================*/

/*==================NOTES=====================*/
//CHANGE_SEARCH_FIELD => Action type, the instructor prefer that we use a constant variable because
//we might be misspelling and we won't get an error (if we user string) if we misspell a variable name ,
//we'll get an error.

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILD
} from './constants.js';

export const setSearchField = (text) => {
    return{
        type : CHANGE_SEARCH_FIELD,
        payload : text
    }
}

//requestRobots is a higher order function { a fucntion that returns a function }
export const requestRobots = () => (dispatch) => {
    dispatch({type:REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS , payload :data}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILD , payload:error}))
}