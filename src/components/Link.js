import React from 'react';

import './Link.css';

let Link = ({text, onClick}) => {
    return (
        <div className="link-container" onClick={onClick}>
            {text}
        </div>
    );
};

export default Link;