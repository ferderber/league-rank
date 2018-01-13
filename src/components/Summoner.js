import React from 'react';

import './Summoner.css';

const Summoner = ({summoner, onClick}) => (
  <div className="summoner" onClick={onClick}>
    <div className="summoner-content">
      <div className="summoner-main">
        <span className="summoner-level">{summoner.level}</span>
        <img src={getIconUrl(summoner)} alt="Summoner icon" className="profileImage"/>
        <span>{summoner.name}</span>
      </div>
      <span
        className="summoner-image"
        style={getBackgroundStyle(summoner.championMasteries)}></span>
    </div>
  </div>
);
function getBackgroundStyle(championMasteries) {
  if (championMasteries.length > 0) {
    return {backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championMasteries[0].champion.key}_0.jpg')`};
  }
}
function getIconUrl(summoner) {
  return "http://ddragon.leagueoflegends.com/cdn/8.1.1/img/profileicon/" + summoner.profileIconId + ".png";
}

export default Summoner;