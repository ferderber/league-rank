import {
  SET_SUMMONERS,
  ADD_SUMMONERS,
  SUMMONER_REQUEST,
  SUMMONER_FAILURE,
  SUMMONER_SUCCESS,
  SUMMONERS_REQUEST,
  SUMMONERS_FAILURE,
  SUMMONERS_SUCCESS,
  INCREMENT_PAGE,
  CALL_API
} from './types';
import {push} from 'react-router-redux/actions';

export const setSummoners = summoners => {
  return {type: SET_SUMMONERS, summoners};
}

export const addSummoners = summoners => {
  return {type: ADD_SUMMONERS, summoners};
}

export const incrementPage = () => {
  return {type: INCREMENT_PAGE};
}

const fetchSummoner = name => ({
  [CALL_API]: {
    types: [
      SUMMONER_REQUEST, SUMMONER_SUCCESS, SUMMONER_FAILURE
    ],
    endpoint: `/summoners/${name}`,
  }
});

const fetchSummoners = (pageNum) => ({
  [CALL_API]: {
    types: [
      SUMMONERS_REQUEST, SUMMONERS_SUCCESS, SUMMONERS_FAILURE
    ],
    endpoint: `/summoners?page=${pageNum}`
  }
});

const fetchMoreSummoners = (pageNum) => ({
  [CALL_API]: {
    types: [
      SUMMONERS_REQUEST, ADD_SUMMONERS, SUMMONERS_FAILURE
    ],
    endpoint: `/summoners?page=${pageNum}`
  }
});

export const getSummoners = () => (dispatch, getState) => {
  return dispatch(fetchSummoners(getState().app.pageNum));
}

export const loadMoreSummoners = () => (dispatch, getState) => {
  dispatch(incrementPage());
  return dispatch(fetchMoreSummoners(getState().app.pageNum));
}

export const getSummoner = (name) => (dispatch, getState) => {
  const formattedName = name.replace(/ /g, '');
  dispatch(push(`/summoner/${formattedName}`));
  return dispatch(fetchSummoner(formattedName));
}