import React, {Component} from 'react';
import {connect} from 'react-redux';
import Summoner from './Summoner';
import ChampionMastery from './ChampionMastery';

import styles from './Profile.css';
import {getSummoner} from '../actions/index';

class Profile extends Component {
  componentWillMount() {
    if (this.props.activeSummoner === null && this.props.loading === false) {
      this
        .props
        .getSummoner(this.props.match.params.name);
    }
  }
  render() {
    const {activeSummoner} = this.props;
    const summoner = activeSummoner;
    if (summoner) {
      return (
        <div className={styles.profile}>
          <div className={styles.profileHeader}>
            <Summoner summoner={summoner}/>
          </div>
          <div className={styles.profileBody}>
            <h2>Masteries</h2>
            <div className={styles.masteries}>
              {summoner.championMasteries && summoner
                .championMasteries
                .map(m => <ChampionMastery
                  championMastery={m}
                  key={m.mastery.summonerId + m.mastery.championId}/>)}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return state.app;
}

export default connect(mapStateToProps, {getSummoner})(Profile);