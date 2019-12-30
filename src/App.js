import React from "react";

import Cart from "./Pages/cart";
import ShowProducts from "./Pages/show";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import NavBar from "./Components/navBar";
function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true} component={ShowProducts}></Route>
        <Route path="/product" component={ShowProducts}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
