import {connect} from 'react-redux';
import SummonerList from '../components/SummonerList';
import {createSummoner, fetchSummoners} from '../actions/index';

const mapStateToProps = state => {
  return state.app;
};

const mapDispatchToProps = (dispatch, props) => {
  dispatch(fetchSummoners());
  return {
    onClick: (name) => {
      dispatch(createSummoner(name));
    }
  }
}

const VisibleSummonerList = connect(mapStateToProps, mapDispatchToProps)(SummonerList);

export default VisibleSummonerList;