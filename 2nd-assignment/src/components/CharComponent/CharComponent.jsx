import React from "react";

function Char(props) {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid white",
    color: "white",
    cursor: "pointer",
  };
  if (props.letter === " ") {
    return (
      <div style={style} onClick={props.click}>
        _
      </div>
    );
  } else {
    return (
      <div style={style} onClick={props.click}>
        {props.letter}
      </div>
    );
  }
}

export default Char;
