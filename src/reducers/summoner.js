const summoners = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUMMONERS':
      return Object.assign({}, state, {summoners: action.summoners});
    default:
      return state;
  }
};

export default summoners;