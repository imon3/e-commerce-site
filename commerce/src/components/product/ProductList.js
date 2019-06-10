import React from "react";
import Product from "./Product";
import Title from "../title/Title";
import { ProductConsumer } from "../../context";

class ProductList extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
