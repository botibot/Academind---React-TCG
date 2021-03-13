import React from "react";
import cssmnod from "./Burguer.module.css";
import BurguerIngridient from "./BurgerIngredient/BurgerIngredient";

function Burguer(props) {
  let transformIngridients = Object.keys(props.ingridients)
    .map((ingKey) => {
      return [...Array(props.ingridients[ingKey])].map((_, i) => {
        return <BurguerIngridient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformIngridients.length === 0) {
    transformIngridients = <p> Please start adding ingridients </p>;
  }

  return (
    <div className={cssmnod.Burguer}>
      <BurguerIngridient type='bread-top' />
      {transformIngridients}
      <BurguerIngridient type='bread-bottom' />
    </div>
  );
}

export default Burguer;
