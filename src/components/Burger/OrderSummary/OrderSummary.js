import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchangeCalcelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchangeContinued} btnType="Success">
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
