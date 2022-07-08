import React from 'react'

 function Payment() {
  return (
    <div className="payment">
<div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
  )
}

export default Payment;
