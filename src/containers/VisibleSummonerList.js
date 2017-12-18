import {connect} from 'react-redux';
import actions from '../actions';
import SummonerList from '../components/SummonerList';

const mapStateToProps = state => {
  return state;
};
const VisibleSummonerList = connect(mapStateToProps)(SummonerList);

export default VisibleSummonerList;