import {baseUrl} from '../config';
import {toast} from 'react-toastify';
import {push} from 'react-router-redux';
import {SET_SUMMONERS, SET_ACTIVE_SUMMONER, ADD_SUMMONERS} from './types';

async function request(url, options) {
  try {
    const res = await fetch(baseUrl + url, options);
    if (res.status < 300) {
      return await res.json();
    } else {
      throw await res.json();
    }
  } catch (err) {
    toast(`Error: ${err.message}`);
    throw err;
  }
}

export const setSummoners = summoners => {
  return {type: SET_SUMMONERS, summoners};
}

export const addSummoners = summoners => {
  return {type: ADD_SUMMONERS, summoners};
}

export const setActiveSummoner = summoner => {
  return {type: SET_ACTIVE_SUMMONER, summoner};
}

export function fetchSummoners() {
  return async function (dispatch) {
    try {
      const summoners = await request('/summoners/1');
      dispatch(setSummoners(summoners));
    } catch (err) {}
  }
}

export function createSummoner(name) {
  const formattedName = name.replace(' ', '');
  return async(dispatch) => {
    try {
      const summoner = await request(`/summoner/${formattedName}`);
      dispatch(addSummoners([summoner]));
      dispatch(setActiveSummoner(summoner));
      dispatch(push(`/summoner/${formattedName}`));
    } catch (err) {}
  }
}