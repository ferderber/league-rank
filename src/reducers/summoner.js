const summoners = (state = {
  summoners: []
}, action) => {
  switch (action.type) {
    case 'SET_SUMMONERS':
      return Object.assign({}, state, {summoners: action.summoners});
    case 'ADD_SUMMONERS':
      return Object.assign({}, state, {
        summoners: [
          ...state
            .summoners
            .filter(s => action.summoners.every(s2 => s.summonerId !== s2.summonerId)),
          ...action.summoners
        ].sort((s1, s2) => s2.level - s1.level)
      });
    case 'SET_ACTIVE_SUMMONER':
      return Object.assign({}, state, {activeSummoner: action.summoner});
    default:
      return state;
  }
};

export default summoners;