import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSummoner} from '../actions';
import Button from '../components/Button';
import {toast} from 'react-toastify';

import styles from './AddSummoner.css';
import Input from '../components/Input';

class AddSummoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: ''
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleSummonerNameChange = this
      .handleSummonerNameChange
      .bind(this);
    this.validate = this
      .validate
      .bind(this);
  }
  validate() {
    if (this.state.summonerName) {
      if (/^[0-9A-Za-z _\\.]+$/.test(this.state.summonerName)) {
        return true;
      } else {
        toast('Invalid summoner name!');
      }
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      this
        .props
        .getSummoner(this.state.summonerName);
    }
  }
  handleSummonerNameChange(e) {
    this.setState({summonerName: e.target.value});
  }

  render() {
    return (
      <form className={styles.addSummoner} onSubmit={this.handleSubmit}>
        <Input name="Summoner Name" onChange={this.handleSummonerNameChange}/>
        <Button text="Search"/>
      </form>
    );
  }
}

AddSummoner = connect(null, {getSummoner})(AddSummoner);

export default AddSummoner;