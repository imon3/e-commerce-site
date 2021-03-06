import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

// component imports
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import Details from "./components/details/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/default/Default";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
