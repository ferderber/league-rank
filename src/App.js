import React, {Component} from 'react';
import {ToastContainer} from 'react-toastify';
import './App.css';
import AddSummoner from './containers/AddSummoner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>
            <a href="/">LeagueRank</a>
          </h1>
          <AddSummoner/>
          <div></div>
        </nav>
        {this.props.children}
        <ToastContainer autoClose={5000}/>
      </div>
    );
  }
}

export default App;
