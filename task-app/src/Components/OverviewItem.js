import React, { Component } from 'react';
import './Overview.css';

class OverviewItem extends Component {
  render() {
    return (
      <li className="items">
        <button onClick={() => this.props.getId(this.props.id)}>Delete</button>
        <div>{this.props.text}</div>
        <div>{this.props.number}</div>
      </li>
    );
  }
}

export default OverviewItem;
