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
      detailProduct: [],
      cart: [],
      modalOpen: false,
      modalProduct: []
    };
  }

  componentDidMount() {
    const tempDetailProduct = detailProduct;
    const tempModalProduct = detailProduct;
    let tempProducts = [];

    storeProducts.forEach(item => {
      let singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState({
      products: tempProducts,
      detailProduct: tempDetailProduct,
      modalProduct: tempModalProduct
    });
  }

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          product: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => console.log(this.state)
    );
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
