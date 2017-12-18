import React, {Component} from 'react';

import './Summoner.css';

class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this
      .handleClick
      .bind(this);
  }
  render() {
    return (
      <div className="summoner" onClick={this.handleClick}>
        <img src={this.getIconUrl()} alt="Summoner icon" className="profileImage"/>
        <span className="username">{this.props.data.name}</span>
        <span>{this.props.data.level}</span>
        {this.state.open ? <div className="detail">User details</div> : null}
      </div>
    );
  }
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }
  getIconUrl() {
    return "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/" + this.props.data.iconId + ".png";
  }
}

export default Summoner;