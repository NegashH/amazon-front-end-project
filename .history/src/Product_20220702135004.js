import React from "react";
import "./Product.css";
// import { useStateValue } from "./Stateprovider";
function Product({ id, title, image, price, rating }) {
      //  console.log("this is the basket", basket);
//   const addToBasket = () => {
//     // dispatch the item into the data layer
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)//six content holds
                .fill()
                .map(() => (
                  <p>🌟</p>
                ))}
        </div>
      </div>
      <img src="" alt="" />
       {/* <img src="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg" 
      alt=""  
      /> */}
       <button>Add to Basket</button>
        </div>
   
  );
}

export default Product;
