import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Frames/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Components/Frames/Services";
import Products from "./Components/Frames/Products";
import SignUp from "./Components/Frames/SignUp";
import FAQ from "./Components/Frames/FAQ";
import chat from "./chat";
function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/FAQ" component={FAQ} />
        </Switch>
      </Router>
      <chat />
    </>
  );
}

export default App;
