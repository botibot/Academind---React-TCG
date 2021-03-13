import React, { Component } from "react";
import Burguer from "../../Components/Burguer/Burguer";
import BuildControls from "../../Components/Burguer/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  chesse: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurguerBuilder extends Component {
  state = {
    ingridients: {
      salad: 0,
      bacon: 0,
      chesse: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngridientHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingridients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingridients: updatedIngredients });
  };

  removeIngridientHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingridients,
    };
    updatedIngredients[type] = updatedCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;
    this.setState({
      totalPrice: newPrice,
      ingridients: updatedIngredients,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingridients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Burguer ingridients={this.state.ingridients} />
        <BuildControls
          ingridientsAdded={this.addIngridientHandler}
          ingridientsRemoved={this.removeIngridientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurguerBuilder;
