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
      modalProduct: [],
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    };
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
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
  };

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
      () => this.addTotals()
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

  increment = id => {
    console.log("this is increment method");
  };

  decrement = id => {
    console.log("this is decrement method");
  };

  removeItem = id => {
    console.log("this removed the item");
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.setProducts();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      return (subTotal += item.total);
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
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
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
