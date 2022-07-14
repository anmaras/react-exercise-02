import React, { Component } from 'react';
import Overview from './Components/Overview';
import uniqid from 'uniqid';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        title: '',
        id: uniqid(),
        number: 0,
      },

      taskArray: [],
    };

    this.userInputHandler = this.userInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  userInputHandler(e) {
    this.setState({
      task: {
        title: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number,
      },
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState((prev) => ({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: {
        title: '',
        id: uniqid(),
        number: prev.task.number + 1,
      },
    }));

    // this.setState((prev) => ({
    //   number: prev.number + 1,
    // }));
  }

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.submitHandler}>
          <div className="form-controls">
            <label>UserInput</label>
            <input
              name="userInput"
              value={this.state.task.title}
              onChange={this.userInputHandler}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Overview taskArray={this.state.taskArray} />
      </div>
    );
  }
}

export default App;
