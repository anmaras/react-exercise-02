import React, { Component } from 'react';
import OverviewItem from './OverviewItem';
import './Overview.css';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: this.props.taskArray,
    };
    this.getObjectId = this.getObjectId.bind(this);
  }

  getObjectId(data) {
    this.setState({
      array: this.state.array,
    });
    console.log(this.props.taskArray);
    console.log(this.state.array);
    // this.setState((prev) => ({
    //   array: prev.array.filter((arr) => arr.id !== data),
    // }));
    // this.setState({
    //   array: this.state.array.filter((arr) => arr.id !== data),
    // });
  }

  render() {
    const { taskArray } = this.props;
    console.log(this.state.array);

    const taskList = taskArray.map((arr) => (
      <OverviewItem
        text={arr.title}
        key={arr.id}
        number={arr.number}
        id={arr.id}
        getId={this.getObjectId}
      />
    ));

    return <ul className="overview">{taskList}</ul>;
  }
}

export default Overview;
