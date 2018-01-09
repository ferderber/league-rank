import React from 'react';
import {connect} from 'react-redux';
import Summoner from './Summoner';
import ChampionMastery from './ChampionMastery';

import './Profile.css';
import {createSummoner} from '../actions/index';

const Profile = ({dispatch, match, summoners}) => {
  const summoner = summoners.find((s) => s.name.toLowerCase() === match.params.name.toLowerCase())
  if (summoner) {
    return (summoner
      ? <div className="profile">
          <div className="profile-header">
            <Summoner summoner={summoner}/>
          </div>
          <div className="profile-body">
            <h2>Masteries</h2>
            <div className="masteries">
              {summoner.championMasteries && summoner
                .championMasteries
                .map(m => <ChampionMastery
                  championMastery={m}
                  key={m.mastery.summonerId + m.mastery.championId}/>)}
            </div>
          </div>
        </div>
      : null);
  } else {
    dispatch(createSummoner(match.params.name.toLowerCase()));
    //add loading bar here
    return null;
  }
};
function mapStateToProps(state) {
  return state.app;
}

export default connect(mapStateToProps)(Profile);