import React from 'react';

import styles from './ErrorPane.css';

const ErrorPane = ({message}) => {
    return (
        <div className={styles.errorPane}>
            <h2>Error!</h2>
            <div className={styles.message}>{message}</div>
            <div className={styles.description}></div>
        </div>
    );
};

export default ErrorPane;