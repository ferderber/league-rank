import React from 'react';
import {connect} from 'react-redux';
import {getSummoner} from '../actions';
import Button from '../components/Button';

import './AddSummoner.css';

function validate(value) {
  if (!value) {
    return false;
  }
  return true;
}

let AddSummoner = ({dispatch, getSummoner}) => {
  let summonerInput;

  return (
    <form
      className="add-summoner"
      onSubmit={e => {
      e.preventDefault();
      if (validate(summonerInput.value)) {
        getSummoner(summonerInput.value);
      }
      summonerInput.value = '';
    }}>
      <input
        className="summoner-input"
        ref={node => {
        summonerInput = node;
      }}/>
      <Button text="Lookup Summoner"></Button>
    </form>
  );
};

AddSummoner = connect(null, {getSummoner})(AddSummoner);

export default AddSummoner;