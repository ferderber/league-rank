import {baseUrl} from '../config';
import {CALL_API} from '../actions/types';
import { toast } from 'react-toastify';

const callApi = (endpoint, options) => {
    const fullUrl = (endpoint.indexOf(baseUrl) === -1)
        ? baseUrl + endpoint
        : endpoint;

    return fetch(fullUrl, options).then(response => response.json().then(json => {
        if (!response.ok) {
            toast(json.message);
            return Promise.reject(json);
        }
        return json;
    }))
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let {endpoint} = callAPI;
    const {options, types} = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [requestType,
        successType,
        failureType] = types;
    next(actionWith({type: requestType}));

    return callApi(endpoint, options).then(response => next(actionWith({response, type: successType})), error => next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened'
    })));
};