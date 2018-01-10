import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {push} from 'react-router-redux';
import './App.css';
import AddSummoner from './containers/AddSummoner';
import {BarLoader} from 'react-spinners';
import ErrorPane from './components/ErrorPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img
            className="logo"
            src="lrhalf.png"
            width="100px"
            onClick={this.props.navigateHome}/>
          <AddSummoner className="primary-input"/>
        </nav>
        <ToastContainer autoClose={5000}/> {this.props.loading
          ? <div className="loading-bar">
              <BarLoader
                width={200}
                height={8}
                color={'#36d7b7'}
                loading={this.props.loading}/>
            </div>
          : null}
        {this.props.errorMessage
          ? <ErrorPane message={this.props.errorMessage}/>
          : null}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {loading: state.app.loading, errorMessage: state.app.errorMessage};
};

export default connect(mapStateToProps, {
  navigateHome: () => push('/')
})(App);
