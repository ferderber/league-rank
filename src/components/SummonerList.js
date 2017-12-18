import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Summoner from '../components/Summoner';

import './SummonerList.css';
const SummonerList = ({summoners}) => (
  <div className="summoners">
    {summoners && summoners.map((summoner) => <Summoner key={summoner.name} data={summoner}/>)}
  </div>
);

SummonerList.propTypes = {
  summoners: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, level: PropTypes.number}))
}

export default SummonerList;