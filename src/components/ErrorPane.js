import React from 'react';

import './ErrorPane.css';

const ErrorPane = ({message}) => {
    return (
        <div className="error-pane">
            <h2>Error!</h2>
            <div className="message">{message}</div>
            <div className="description"></div>
        </div>
    );
};

export default ErrorPane;