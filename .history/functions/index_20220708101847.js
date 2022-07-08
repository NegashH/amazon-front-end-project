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
  'sk_test_51LIvtIHZNJYZQK2a6TGpaWonaXbUacEQSr6mJcuDCHoajA5dxRWIN82uiB7P4GG0YyGq79xUhWmdp9ffEyW5Tw6e00hx7HfSYz'
);


  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/aug-bc35b/us-central1/api
