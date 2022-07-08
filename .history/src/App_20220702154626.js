import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import Product from "./Product";
// import Home from "./Home";
// import Subtotal from "./Subtotal";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Checkout"
          
          <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
          // element = {  
          // <Header />,<Checkout />
          //   }
          // />
          // {/* </Route> */}
          // <Route path="/" element = {<Header /> , <Home />} 
          // />
          // {/* </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
