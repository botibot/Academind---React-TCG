import React, { Component } from "react";
import "./App.css";
import UserInput from "./stateless_Component/UserInput/UserInput";
import UserOutput from "./stateless_Component/UserOutput/UserOutput";

class App extends Component {
  state = {
    UserName: "Jorge",
  };

  nameChangeHandler = (event) => {
    this.setState({ UserName: event.target.value });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello! {this.state.UserName}</h1>
        <h2>Assignment 1</h2>
        <UserInput
          nameChange={this.nameChangeHandler}
          currentName={this.state.UserName}
        />
        <UserOutput name={this.state.UserName} />
        <UserOutput name={this.state.UserName} />
        <UserOutput name={this.state.UserName} />
        <UserOutput name={this.state.UserName} />
        <UserOutput name={this.state.UserName} />
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

export default App;
