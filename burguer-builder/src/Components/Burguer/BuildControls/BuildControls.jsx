import React from "react";
import cssmod from "./BuildControl.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Chesse", type: "chesse" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

function BuildControls(props) {
  return (
    <div className={cssmod.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingridientsAdded(ctrl.type)}
          removed={() => props.ingridientsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
  );
}

export default BuildControls;
