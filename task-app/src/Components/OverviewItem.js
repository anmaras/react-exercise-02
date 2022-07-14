import React, { Component } from 'react';
import './Overview.css';

class OverviewItem extends Component {
  // const {text ,key}= this.props
  render() {
    return (
      <li className="items">
        <div>{this.props.text}</div>
        <div>{this.props.number}</div>
      </li>
    );
  }
}

export default OverviewItem;
