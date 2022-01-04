import React from "react";

function Product({ productdata }) {
  return (
    <div className="product">
      <p>{productdata.name}</p>
      <p>{productdata.price} KD</p>
      <img src={productdata.image} />
    </div>
  );
}

export default Product;
