import React from "react";
import "./Product.css";
// import { useStateValue } from "./Stateprovider";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* {Array(rating)
                .fill()
                .map(() => (
                  <p>🌟</p>
                ))} */}
                 <p>🌟</p>
        </div>
      </div>
      {/* <img src={image} alt="" />
    
          <button onClick={addToBasket}>Add to Basket</button>
        </div> */}
    </div>
  );
}

export default Product;
