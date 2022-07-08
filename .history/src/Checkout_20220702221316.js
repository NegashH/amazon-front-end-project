import React from "react";
import "./Checkout.css";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";
// import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    //   <div>
    //       <h1>jljl</h1>
    //   </div>
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
      {/* </div> */}
      <div className="checkout__right">
        <Subtotal />
        {/* <h1>Subtotal</h1> */}
      </div>
    </div>
  ));
}

export default Checkout;
