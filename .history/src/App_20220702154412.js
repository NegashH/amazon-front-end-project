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
        <Swi>
          <Route path="/Checkout"
          element = {  
          <Header />,<Checkout />
            }
          />
          {/* </Route> */}
          <Route path="/" element = {<Header /> , <Home />} 
          />
          {/* </Route> */}
        </Swi>
      </div>
    </Router>
  );
}

export default App;
