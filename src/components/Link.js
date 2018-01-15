import React from 'react';

import styles from './Link.css';

let Link = ({text, onClick}) => {
    return (
        <div className={styles.linkContainer} onClick={onClick}>
            {text}
        </div>
    );
};

export default Link;