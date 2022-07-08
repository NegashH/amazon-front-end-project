import React from "react";
import "./Checkout.css";
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

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
        {/* <div> */}
          <h3>Hello</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <CheckoutProduct />
      </div>
      <div className="checkout__right">
        <Subtotal />
        {/* <h1>Subtotal</h1> */}
      </div>
    </div>
  );
}

export default Checkout;
