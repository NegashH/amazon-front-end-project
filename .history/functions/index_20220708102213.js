const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LIvtIHZNJYZQK2a6TGpaWonaXbUacEQSr6mJcuDCHoajA5dxRWIN82uiB7P4GG0YyGq79xUhWmdp9ffEyW5Tw6e00hx7HfSYz"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post('/payments/create', async (request, response) => {
//   const total = request.query.total;

exports.api = functions.https.onRequest(app);
