import React, { Component } from 'react';
import './Overview.css';

class OverviewItem extends Component {
  // const {text ,key}= this.props
  render() {
    return <li className="items">{this.props.text}</li>;
  }
}

export default OverviewItem;
