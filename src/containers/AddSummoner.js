import React from 'react';
import {connect} from 'react-redux';
import {getSummoner} from '../actions';
import Button from '../components/Button';
import {toast} from 'react-toastify';

import './AddSummoner.css';

function validate(value) {
  if (value) {
    if(/^[0-9\\p{L} _\\.]+$/.test(value)) {
      return true;
    } else {
      toast('Invalid summoner name!');
    }
  }
  return false;
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
      <Button text="Search"></Button>
    </form>
  );
};

AddSummoner = connect(null, {getSummoner})(AddSummoner);

export default AddSummoner;