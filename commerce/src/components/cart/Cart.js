import React from "react";
import Title from "../title/Title";
import CartColumns from "./CartColumns";

class Cart extends React.Component {
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
        <CartColumns />
      </section>
    );
  }
}

export default Cart;
