import {
  SET_SUMMONERS,
  ADD_SUMMONERS,
  SUMMONER_REQUEST,
  SUMMONER_FAILURE,
  SUMMONER_SUCCESS,
  SUMMONERS_REQUEST,
  SUMMONERS_FAILURE,
  SUMMONERS_SUCCESS,
  CALL_API
} from './types';
import {push} from 'react-router-redux/actions';

export const setSummoners = summoners => {
  return {type: SET_SUMMONERS, summoners};
}

export const addSummoners = summoners => {
  return {type: ADD_SUMMONERS, summoners};
}

const fetchSummoner = name => ({
  [CALL_API]: {
    types: [
      SUMMONER_REQUEST, SUMMONER_SUCCESS, SUMMONER_FAILURE
    ],
    endpoint: `/summoners/${name}`,
    options: {
      method: 'POST'
    }
  }
});

const fetchSummoners = () => ({
  [CALL_API]: {
    types: [
      SUMMONERS_REQUEST, SUMMONERS_SUCCESS, SUMMONERS_FAILURE
    ],
    endpoint: `/summoners/1`
  }
});

export const getSummoners = () => (dispatch, getState) => {
  return dispatch(fetchSummoners());
}

export const getSummoner = (name) => (dispatch, getState) => {
  const formattedName = name.replace(' ', '');
  dispatch(push(`/summoner/${formattedName}`));
  return dispatch(fetchSummoner(formattedName));
}