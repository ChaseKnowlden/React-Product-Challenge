import React from "react";
import "./Product.css";

const Product = props => {
  return (
    <div className="product-grid">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p>${props.price}</p>
      <p>{props.cat}</p>
    </div>
  );
};

export default Product;
