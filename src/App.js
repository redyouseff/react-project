import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import FormExample from "./component/Registers";
import FormExamplee from "./component/Login";
import About from "./component/About";
import Contact from "./component/Contact";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";





function App() {

  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={FormExample} />
        <Route exact path="/login" component={FormExamplee} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />

      </Switch>
    </>
  );
}

export default App;
