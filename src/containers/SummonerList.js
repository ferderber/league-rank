import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {getSummoners} from '../actions/index';
import SummonerCard from '../components/SummonerCard';

import './SummonerList.css';

const mapStateToProps = state => {
  return state.app;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSummoners: () => dispatch(getSummoners()),
    onClick: (name) => {
      dispatch(push(`/summoner/${name}`));
    }
  }
}

class SummonerList extends Component {
  componentWillMount() {
    this
      .props
      .getSummoners();
  }

  render() {
    const {summoners, onClick} = this.props;
    if (summoners.length > 0) {
      return (
        <div className="summoners">
          {summoners.map((summoner) => <SummonerCard key={summoner.name} summoner={summoner} onClick={onClick}/>)}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummonerList);
