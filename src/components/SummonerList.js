import React from 'react';
import PropTypes from 'prop-types';
import SummonerCard from './SummonerCard';

import './SummonerList.css';
const SummonerList = ({summoners, onClick}) => (
  <div className="summoners">
    {summoners && summoners.map((summoner) => <SummonerCard key={summoner.name} summoner={summoner} onClick={onClick}/>)}
  </div>
);

SummonerList.propTypes = {
  summoners: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, level: PropTypes.number}))
}

export default SummonerList;