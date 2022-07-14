import React, { Component } from 'react';
import OverviewItem from './OverviewItem';
import './Overview.css';

class Overview extends Component {
  render() {
    const { taskArray } = this.props;

    const taskList = taskArray.map((arr) => (
      <OverviewItem text={arr.title} key={arr.id} />
    ));

    return <ul className="overview">{taskList}</ul>;
  }
}

export default Overview;
