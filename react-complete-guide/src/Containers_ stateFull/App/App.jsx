import React, { Component } from "react";
import cssmodule from "./App.module.css";
import Persons from "../../Components _stateLess/Persons/Persons";
import Cockpit from "../../Components _stateLess/Cockpit/Cockpit";

class App extends Component {
  constructor() {
    super();
    console.log("[App.js] constructor");
    // this.state ={}
  }

  state = {
    persons: [
      { id: "aas1", name: "Jorge", age: 36 },
      { id: "asd2", name: "Pequi", age: 31 },
      { id: "aer3", name: "Ike", age: 1.65 },
    ],
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p_erson) => {
      return p_erson.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    if (this.state.showPersons) {
      this.setState({ showPersons: false });
    } else {
      this.setState({ showPersons: true });
    }
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons }); //es6 if the property === vale; this.setState({ persons:persons })
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <div className={cssmodule.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
