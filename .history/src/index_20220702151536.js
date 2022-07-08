import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
// import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
// import { StateProvider } from "./Stateprovider";

const root = ReactDOM.createRoot(
  document.getElementById("root")
  );
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
