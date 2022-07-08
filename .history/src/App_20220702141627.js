import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
// import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
// import Login from "./Login";
// import { auth } from "./firebase";
// import React, { useEffect } from "react";
// import { useStateValue } from "./Stateprovider";

function App() {
  // const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     // console.log("THE USER IS >>> ", authUser);
  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Header />
            {/* <Home /> */}
            {/* <Product/> */}
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
