import React from 'react';

import './Button.css';

let Button = ({text, dispatch}) => {
  return (
    <button className="btn" onClick={() => ""}>
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default Button;