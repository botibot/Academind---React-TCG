import React from "react";
import cssmod from "./Cockpit.module.css";

function Cockpit(props) {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    console.log("showing person", cssmod.Red);
    btnClass = cssmod.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(cssmod.Red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(cssmod.Bold);
  }

  return (
    <div>
      <h1>Hi, I'm a react App</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.toggle}>
        Toggle Persons
      </button>
    </div>
  );
}

export default Cockpit;
