import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSummoners, getSummoner} from '../actions/index';
import SummonerCard from '../components/SummonerCard';

import './SummonerList.css';

const mapStateToProps = state => {
  return state.app;
};

class SummonerList extends Component {
  componentWillMount() {
    this
      .props
      .getSummoners();
  }

  render() {
    const {summoners, getSummoner} = this.props;
    if (summoners.length > 0) {
      return (
        <div className="summoners">
          {summoners.map((summoner) => <SummonerCard key={summoner.name} summoner={summoner} onClick={getSummoner}/>)}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, {getSummoners, getSummoner})(SummonerList);
