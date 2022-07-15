import React, { Component } from 'react';
import OverviewItem from './OverviewItem';
import './Overview.css';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.getObjectId = this.getObjectId.bind(this);
  }

  getObjectId(data) {
    this.props.objectKey(data);
  }

  render() {
    const { taskArray } = this.props;

    const taskList = taskArray.map((arr, index) => (
      <OverviewItem
        text={arr.title}
        key={arr.id}
        number={index}
        id={arr.id}
        getId={this.getObjectId}
      />
    ));

    return <ul className="overview">{taskList}</ul>;
  }
}

export default Overview;
