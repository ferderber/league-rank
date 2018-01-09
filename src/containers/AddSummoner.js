import React from 'react';
import {connect} from 'react-redux';
import {getSummoner} from '../actions';
import {push} from 'react-router-redux';
import Button from '../components/Button';

import './AddSummoner.css';

function validate(value) {
  if (!value) {
    return false;
  }
  return true;
}

let AddSummoner = ({dispatch, navigateToProfile}) => {
  let summonerInput;

  return (
    <form
      className="add-summoner"
      onSubmit={e => {
      e.preventDefault();
      if (validate(summonerInput.value)) {
        navigateToProfile(summonerInput.value);
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

AddSummoner = connect(null, {getSummoner, navigateToProfile: (name) => push(`/summoner/${name}`) })(AddSummoner);

export default AddSummoner;