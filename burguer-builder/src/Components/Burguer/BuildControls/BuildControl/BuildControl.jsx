import React from "react";
import cssmod from "./BuildControl.module.css";

function BuildControl(props) {
  return (
    <div className={cssmod.BuildControl}>
      <div className={cssmod.Label}>{props.label}</div>
      <button
        className={cssmod.Less}
        onClick={props.removed}
        disabled={props.disabled}>
        Less
      </button>
      <button className={cssmod.More} onClick={props.added}>
        More
      </button>
    </div>
  );
}

export default BuildControl;
