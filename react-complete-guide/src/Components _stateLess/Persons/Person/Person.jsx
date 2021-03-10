import React from "react";
// import "./Person.scss";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  margin-top: 20px;
`;

const Person = (props) => {
  return (
    // <div className='Person'>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
        <input type='text' onChange={props.changed} value={props.name} />
        <span> {props.children}</span>
      </p>
    </StyledDiv>
  );
};

export default Person;
