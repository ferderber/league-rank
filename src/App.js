import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {push} from 'react-router-redux';
import AddSummoner from './containers/AddSummoner';
import {BarLoader} from 'react-spinners';
import ErrorPane from './components/ErrorPane';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <img
            className={styles.logo}
            src="/lr_logo.png"
            width="100px"
            alt="primary logo"
            onClick={this.props.navigateHome}/>
          <AddSummoner/>
        </nav>
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

export default connect(mapStateToProps, {
  navigateHome: () => push('/')
})(App);
