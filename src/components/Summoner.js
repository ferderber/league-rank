import React from 'react';

import styles from './Summoner.css';

const Summoner = ({summoner, onClick}) => (
  <div className={styles.summonerContent} onClick={onClick}>
    <div className={styles.summonerMain}>
      <span className={styles.summonerLevel}>{summoner.level}</span>
      <img
        src={getIconUrl(summoner)}
        alt="Summoner icon"
        className={styles.profileImage}/>
      <span>{summoner.name}</span>
    </div>
    <span
      className={styles.summonerImage}
      style={getBackgroundStyle(summoner.championMasteries)}></span>
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