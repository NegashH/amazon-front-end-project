import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login"
// import { auth } from "./firebase";
// import React, { useEffect } from "react";
// import { useStateValue } from "./Stateprovider";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Login">
            <Login />
            </Route>
          <Route path="/Checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
