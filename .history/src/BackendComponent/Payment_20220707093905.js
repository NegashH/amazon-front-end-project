import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
// import axios from './axios';
// import { db } from './firebase';

 function Payment() {
     const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();
    const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  