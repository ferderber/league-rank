import React from 'react';
import Summoner from './Summoner';

import './SummonerCard.css';

class SummonerCard extends React.Component {
  render() {
    return (
      <div className="summoner-card" onClick={() => this.props.onClick(this.props.summoner.name)}>
        <img className="mastery-image" alt="" src={this.getMasteryIcon()}/>
        <Summoner summoner={this.props.summoner}/> 
      </div>
    );
  }
  getMasteryIcon() {
    if (this.props.summoner.championMasteries.length > 0) {
      return `/mastery${this.props.summoner.championMasteries[0].mastery.championLevel}.png`;
    } else {
      return ``;
    }
  }
}

export default SummonerCard;