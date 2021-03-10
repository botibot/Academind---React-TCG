import React, { Component } from "react";
import "./App.css";
import Validation from "../components/ValidationComponent/ValidationComponent";
import Char from "../components/CharComponent/CharComponent";

class App extends Component {
  state = {
    str: "",
    len: 0,
    chars: [{ id: 0, char: "" }],
  };

  inputBoxHandler = (event) => {
    let strArray = event.target.value.split("");
    let charArray = [];
    strArray.forEach((char, index) => {
      charArray.push({ id: index, char });
    });
    this.setState({
      str: event.target.value,
      len: strArray.length,
      chars: charArray,
    });
  };

  removeLetterHandler = (index) => {
    const letters = [...this.state.chars];
    letters.splice(index, 1);
    let str = [];
    letters.forEach((letter) => {
      str.push(letter.char);
    });
    this.setState({
      str: str.toString().replace(/,/g, ""),
      len: letters.length,
      chars: letters,
    });
  };

  render() {
    let showLength = null;
    let showLetters = null;
    if (this.state.len > 0) {
      showLength = (
        <div>
          <h3> Text lenght: {this.state.len}</h3>
          <Validation largo={this.state.len} />
        </div>
      );
      showLetters = this.state.chars.map((char, index) => {
        return (
          <Char
            key={char.id}
            letter={char.char}
            click={() => this.removeLetterHandler(index)}
          />
        );
      });
    }

    return (
      <div className='App'>
        <header>
          <h1>Try me now!</h1>
        </header>
        <content>
          <input
            onChange={(event) => this.inputBoxHandler(event)}
            className='inputBox'
            type='text'
            value={this.state.str}
          />
          {showLength}
          {showLetters}
        </content>
      </div>
    );
  }
}

// function App() {
//   return <div className='App'></div>;
// }

export default App;
