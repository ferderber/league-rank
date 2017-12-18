import React, {Component} from 'react';

import './Summoner.css';

class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="summoner" onClick={this.handleClick}>
        <span className="summoner-main">
          <span>{this.props.data.level}</span>
          <img src={this.getIconUrl()} alt="Summoner icon" className="profileImage"/>
          <span>{this.props.data.name}</span>
        </span>
        {this.state.open
          ? <div className="detail">User details</div>
          : null}
      </div>
    );
  }
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }
  getIconUrl() {
    return "http://ddragon.leagueoflegends.com/cdn/7.24.2/img/profileicon/" + this.props.data.profileIconId + ".png";
  }
}

export default Summoner;