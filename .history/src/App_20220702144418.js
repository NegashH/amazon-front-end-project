import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import Product from "./Product";
// import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/Checkout">
            <Header />
            {/* <Home /> */}
            {/* <Product/> */}
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
