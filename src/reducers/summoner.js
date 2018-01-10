import {
  SUMMONERS_SUCCESS,
  ADD_SUMMONERS,
  SUMMONER_SUCCESS,
  SUMMONER_REQUEST,
  SUMMONER_FAILURE,
  SUMMONERS_REQUEST
} from '../actions/types';

const summoners = (state = {
  summoners: [],
  loading: false,
  activeSummoner: null,
  errorMessage: null
}, action) => {
  switch (action.type) {
    case SUMMONERS_SUCCESS:
      return Object.assign({}, state, {summoners: action.response, loading: false, errorMessage: null});
    case ADD_SUMMONERS:
      return Object.assign({}, state, {
        summoners: [
          ...state
            .summoners
            .filter(s => action.summoners.every(s2 => s.summonerId !== s2.summonerId)),
          ...action.summoners
        ].sort((s1, s2) => s2.level - s1.level),
        errorMessage: null,
        loading: false
      });
    case SUMMONER_FAILURE:
      return Object.assign({}, state, {loading: false, errorMessage: action.error});
    case SUMMONER_REQUEST:
      return Object.assign({}, state, {activeSummoner: null, loading: true, errorMessage: null});
    case SUMMONERS_REQUEST:
      return Object.assign({}, state, {loading: true, errorMessage: null});
    case SUMMONER_SUCCESS:
      return Object.assign({}, state, {activeSummoner: action.response, loading: false, errorMessage: null});
    default:
      return state;
  }
};

export default summoners;