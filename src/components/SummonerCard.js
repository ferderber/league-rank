import React from 'react';
import Summoner from './Summoner';

import './SummonerCard.css';

class SummonerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this
      .handleClick
      .bind(this);
  }
  render() {
    return (
      <div className="summoner-card">
        <img className="mastery-image" alt="" src={this.getMasteryIcon()}/>
        <Summoner onClick={this.handleClick} summoner={this.props.summoner}/> 
        {this.state.open
          ? <div className="detail">Top champion:
              <img alt="Top champion" width="32px" src={this.getAvatarUrl()}/> {this.props.summoner.championMasteries[0].champion.name}
            </div>
          : null }
      </div>
    );
  }
  handleClick() {
    this
      .props
      .onClick(this.props.summoner.name);
  }
  getMasteryIcon() {
    if (this.props.summoner.championMasteries.length > 0) {
      return `/mastery${this.props.summoner.championMasteries[0].mastery.championLevel}.png`;
    } else {
      return ``;
    }
  }
  getAvatarUrl() {
    if (this.props.summoner.championMasteries.length > 0) {
      return `http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/${this.props.summoner.championMasteries[0].champion.key}.png`;
    } else {
      return '';
    }
  }
}

export default SummonerCard;