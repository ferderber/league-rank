import {baseUrl} from '../config';

export const SET_SUMMONERS = 'SET_SUMMONERS';

function handleResponse(res) {
  return res.json();
}

export const setSummoners = summoners => {
  return {type: SET_SUMMONERS, summoners};
}

export function fetchSummoners() {
  return async function (dispatch) {
    const summoners = await (handleResponse(await fetch(`${baseUrl}/summoners/1`)));
    dispatch(setSummoners(summoners));
  }
}