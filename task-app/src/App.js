import React, { Component } from 'react';
import Overview from './Components/Overview';
import './App.css';

export class App extends Component {
  taskArray = [];

  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };

    this.userInputHandler = this.userInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  userInputHandler(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  clearInput() {
    this.setState({
      userInput: '',
    });
  }

  populateTaskArray(input) {
    this.taskArray.push({ title: input, id: Math.random() });
  }

  submitHandler(e) {
    e.preventDefault();
    this.clearInput();
    this.populateTaskArray(this.state.userInput);
    console.log(this.taskArray);
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
        <Overview taskArray={this.taskArray} />
      </div>
    );
  }
}

export default App;
