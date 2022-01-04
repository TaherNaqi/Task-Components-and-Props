import React from "react";
import data from "../Products";
import Product from "./Product";

function ProductList() {
  let arrayData = data.map((product) => <Product productdata={product} />);
  return <div className="list">{arrayData}</div>;
}

export default ProductList;
