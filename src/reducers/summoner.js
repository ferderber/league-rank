import {
  SUMMONERS_SUCCESS,
  ADD_SUMMONERS,
  SUMMONER_SUCCESS,
  SUMMONER_REQUEST,
  SUMMONER_FAILURE,
  SUMMONERS_FAILURE,
  SUMMONERS_REQUEST,
  INCREMENT_PAGE
} from '../actions/types';
import { LOCATION_CHANGE } from 'react-router-redux';

const summoners = (state = {
  summoners: [],
  loading: false,
  activeSummoner: null,
  errorMessage: null,
  pageNum: 1
}, action) => {
  switch (action.type) {
    case SUMMONERS_SUCCESS:
      return Object.assign({}, state, {summoners: action.response, loading: false, errorMessage: null});
    case ADD_SUMMONERS:
    console.log(state.summoners);
    console.log(action.response);
      return Object.assign({}, state, {
        summoners: [
          ...state
            .summoners
            .filter(s => action.response.every(s2 => s.summonerId !== s2.summonerId)),
          ...action.response
        ].sort((s1, s2) => s2.level - s1.level),
        errorMessage: null,
        loading: false
      });
    case LOCATION_CHANGE:
      return Object.assign({}, state, {pageNum: 1});
    case SUMMONERS_FAILURE:
      return Object.assign({}, state, {loading: false});
    case SUMMONER_FAILURE:
      return Object.assign({}, state, {loading: false, errorMessage: action.error});
    case SUMMONER_REQUEST:
      return Object.assign({}, state, {activeSummoner: null, loading: true, errorMessage: null});
    case SUMMONERS_REQUEST:
      return Object.assign({}, state, {loading: true, errorMessage: null});
    case SUMMONER_SUCCESS:
      return Object.assign({}, state, {activeSummoner: action.response, loading: false, errorMessage: null});
    case INCREMENT_PAGE:
      return Object.assign({}, state, {pageNum: state.pageNum + 1})
    default:
      return state;
  }
};

export default summoners;