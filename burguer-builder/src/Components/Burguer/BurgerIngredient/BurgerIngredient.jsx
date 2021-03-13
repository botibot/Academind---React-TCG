import React from "react";
import cssmod from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

function BurguerIngridient(props) {
  let ingridient = null;

  switch (props.type) {
    case "bread-bottom":
      ingridient = <div className={cssmod.BreadBottom}></div>;
      break;
    case "bread-top":
      ingridient = (
        <div className={cssmod.BreadTop}>
          <div className={cssmod.Seeds1}></div>
          <div className={cssmod.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingridient = <div className={cssmod.Meat}></div>;
      break;
    case "chesse":
      ingridient = <div className={cssmod.Cheese}></div>;
      break;
    case "salad":
      ingridient = <div className={cssmod.Salad}></div>;
      break;
    case "bacon":
      ingridient = <div className={cssmod.Bacon}></div>;
      break;
    default:
      ingridient = null;
  }

  return ingridient;
}

BurguerIngridient.PropTypes = {
  type: PropTypes.string.isRequired,
};

export default BurguerIngridient;
