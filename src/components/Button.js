import React from 'react';

import styles from './Button.css';

let Button = ({text}) => {
  return (
    <button className={styles.btn} onClick={() => ""}>
      <span className={styles.btnText}>{text}</span>
    </button>
  );
};

export default Button;