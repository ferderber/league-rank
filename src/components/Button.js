import React from 'react';

import styles from './Button.css';

let Button = ({text}) => {
  return (
    <button className={styles.btn} onClick={() => ""}>
      {text}
    </button>
  );
};

export default Button;