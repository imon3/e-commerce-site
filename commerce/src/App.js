import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component imports
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import Details from "./components/details/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/default/Default";

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </>
  );
}

export default App;
