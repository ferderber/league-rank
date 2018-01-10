import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSummoners, getSummoner, loadMoreSummoners} from '../actions/index';
import SummonerCard from '../components/SummonerCard';
import Link from '../components/Link';

import './SummonerList.css';

const mapStateToProps = state => {
  return state.app;
};

class SummonerList extends Component {
  constructor(props) {
    super(props);
    this.onShowMoreClick = this
      .onShowMoreClick
      .bind(this);
  }
  componentWillMount() {
    this
      .props
      .getSummoners();
  }

  onShowMoreClick() {
    this
      .props
      .loadMoreSummoners();
  }

  render() {
    const {summoners, getSummoner} = this.props;
    if (summoners.length > 0) {
      return (
        <div className="summoners">
          {summoners.map((summoner) => <SummonerCard key={summoner.name} summoner={summoner} onClick={getSummoner}/>)}
          <Link text="Show More" onClick={this.onShowMoreClick}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, {getSummoners, getSummoner, loadMoreSummoners})(SummonerList);
