import {
  SUMMONERS_SUCCESS,
  ADD_SUMMONERS,
  SET_ACTIVE_SUMMONER,
  SUMMONER_SUCCESS
} from '../actions/types';

const summoners = (state = {
  summoners: []
}, action) => {
  switch (action.type) {
    case SUMMONERS_SUCCESS:
      return Object.assign({}, state, {summoners: action.response});
    case ADD_SUMMONERS:
      return Object.assign({}, state, {
        summoners: [
          ...state
            .summoners
            .filter(s => action.summoners.every(s2 => s.summonerId !== s2.summonerId)),
          ...action.summoners
        ].sort((s1, s2) => s2.level - s1.level)
      });
    case SUMMONER_SUCCESS:
    case SET_ACTIVE_SUMMONER:
      return Object.assign({}, state, {activeSummoner: action.response});
    default:
      return state;
  }
};

export default summoners;