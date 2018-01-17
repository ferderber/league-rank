import React from 'react';
import AddSummoner from './AddSummoner';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import styles from './Nav.css';

let Nav = ({navigateHome}) => {
  return (
      <nav>
        <img
          className={styles.logo}
          src="/lr_logo.png"
          width="100px"
          alt="primary logo"
          onClick={navigateHome}/>
        <AddSummoner/>
      </nav>
  );
};

export default connect(null, {
  navigateHome: () => push('/')
})(Nav);