import React, { Component } from "react";
import Person from "./stateLess_Containers/Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Jorge", age: 36 },
      { name: "Pequi", age: 31 },
      { name: "Ike", age: 1.65 },
    ],
    otherState: "hello",
  };

  switchNameHandler = () => {
    // console.log("clicked");
    // this.state.persons[0].name = "Jorge Arturo";
    this.setState({
      persons: [
        { name: "Jorge Arturo", age: 36 },
        { name: "Pequi", age: 34 },
        { name: "Ike", age: 1.65 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a react App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          {`I love you! <3`}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
