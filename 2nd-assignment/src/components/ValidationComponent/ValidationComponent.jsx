import React from "react";

function Validation(props) {
  if (props.largo < 6) {
    return <h2>Too short</h2>;
  } else if (props.largo >= 6 && props.largo <= 10) {
    return <h2>Long enough</h2>;
  } else {
    return <h2>Too long</h2>;
  }
}

export default Validation;
