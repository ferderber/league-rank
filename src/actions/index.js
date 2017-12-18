export const SET_SUMMONERS = 'SET_SUMMONERS';

const summonerList = [
  {
    name: "Test",
    level: 32,
    iconId: 588
  }, {
    name: "Test2",
    level: 30,
    iconId: 588
  }
];
export const setSummoners = summoners => {
  return {type: SET_SUMMONERS, summoners}
}

export function fetchSummoners() {
  return async function (dispatch) {
    dispatch(setSummoners(summonerList))
  }
}