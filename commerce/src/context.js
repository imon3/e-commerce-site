import React from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      detailProduct: []
    };
  }

  componentDidMount() {
    const tempDetailProduct = detailProduct;
    let tempProducts = [];

    storeProducts.forEach(item => {
      let singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState({
      products: tempProducts,
      detailProduct: tempDetailProduct
    });
  }

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
