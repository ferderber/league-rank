import React, {Component} from 'react';
import VisibleSummonerList from './containers/VisibleSummonerList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleSummonerList/>
      </div>
    );
  }
}

export default App;
