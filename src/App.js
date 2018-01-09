import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {push} from 'react-router-redux';
import './App.css';
import AddSummoner from './containers/AddSummoner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>
            <div onClick={this.props.navigateHome}>LeagueRank</div>
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

export default connect(null, {
  navigateHome: () => push('/')
})(App);
