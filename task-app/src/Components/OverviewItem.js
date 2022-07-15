import React, { Component } from 'react';
import './Overview.css';

class OverviewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Edit',
      isValid: true,
      text: this.props.text,
    };
  }

  changeEditTitle = () => {
    this.state.isValid
      ? this.setState({ title: 'Submit', isValid: !this.state.isValid })
      : this.setState({ title: 'Edit', isValid: !this.state.isValid });
  };

  changeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const isValid = this.state.isValid;

    let editInput;

    if (!isValid) {
      editInput = (
        <div>
          <label></label>
          <input
            type="text"
            onChange={this.changeText}
            value={this.state.text}
          ></input>
        </div>
      );
    } else {
      editInput = <div>{this.state.text}</div>;
    }

    return (
      <li className="items">
        <button onClick={() => this.props.getId(this.props.id)}>Delete</button>
        <button onClick={this.changeEditTitle}>{this.state.title}</button>
        {editInput}
        <div>{this.props.number}</div>
      </li>
    );
  }
}

export default OverviewItem;
