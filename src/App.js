import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {BarLoader} from 'react-spinners';
import ErrorPane from './components/ErrorPane';

import styles from './App.css';
import Nav from './containers/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <ToastContainer autoClose={5000}/> {this.props.loading
          ? <div className={styles.loadingBar}>
              <BarLoader
                width={200}
                height={8}
                color={'#ebb054'}
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

export default connect(mapStateToProps)(App);
