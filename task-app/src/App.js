import React, { Component } from 'react';
import Overview from './Components/Overview';
import './App.css';

export class App extends Component {
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

  submitHandler(e) {
    e.preventDefault();
    this.clearInput();
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
        <Overview />
      </div>
    );
  }
}

export default App;
