const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Hf9EsIjq2KMm1vIwHxBCcrT7rc5AMicZHLl8s4q1we1dGNde0SK33YEemcnxBq6U2NDpcQc31VT5paYaJhZf5dl0080cIzJmc'
);