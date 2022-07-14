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
      },
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.task),
      task: {
        title: '',
        id: uniqid(),
      },
    });
  }

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.submitHandler}>
          <div className="form-controls">
            <label>UserInput</label>
            <input
              name="userInput"
              value={this.state.userInput}
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
