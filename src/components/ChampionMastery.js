import React from 'react';
import MasteryStats from './MasteryStats';

import './ChampionMastery.css';

const ChampionMastery = ({championMastery}) => (
  <div className="champion-mastery">
    <div className="champion-head">
      <div className="head-content">
        <span>
          <img
            className="champion-avatar"
            src={getChampionAvatar(championMastery.champion)}
            alt=""
            width="100px"/>
        </span>
        <h4>{championMastery.champion.name}</h4>
      </div>
      <img
        className="mastery-image"
        src={getMasteryIcon(championMastery.mastery)}
        alt=""
        width="50px"/>
      <span
        className="champion-image"
        style={getBackgroundStyle(championMastery.champion)}></span>
    </div>
    <div className="champion-details">
      <MasteryStats stats={championMastery.statistics}/>
    </div>
  </div>
)
function getBackgroundStyle(champion) {
  return {backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_0.jpg')`};
}
function getChampionAvatar(champion) {
  return `http://ddragon.leagueoflegends.com/cdn/8.1.1/img/champion/${champion.key}.png`;
}
function getMasteryIcon(mastery) {
  return `/mastery${mastery.championLevel}.png`;
}

export default ChampionMastery;