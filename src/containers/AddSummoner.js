import React from 'react';
import {connect} from 'react-redux';
import {getSummoner} from '../actions';
import Button from '../components/Button';
import {toast} from 'react-toastify';

import styles from './AddSummoner.css';

function validate(value) {
  if (value) {
    if(/^[0-9A-Za-z _\\.]+$/.test(value)) {
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
      className={styles.addSummoner}
      onSubmit={e => {
      e.preventDefault();
      if (validate(summonerInput.value)) {
        getSummoner(summonerInput.value);
      }
      summonerInput.value = '';
    }}>
      <input
        className={styles.summonerInput}
        ref={node => {
        summonerInput = node;
      }}/>
      <Button text="Search"></Button>
    </form>
  );
};

AddSummoner = connect(null, {getSummoner})(AddSummoner);

export default AddSummoner;