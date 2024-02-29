import React from "react";

const Product = ({ price, quantity, title }) => (
  <div>
    {title} - {price} {quantity ? ` x ${quantity}` : ""}
  </div>
);
export default Product;
