import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Error from "./pages/Error";
import BuyPlans from "./pages/BuyPlans";
import Consultation from "./pages/Consultation";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/consultation" component={Consultation}></Route>
        <Route path="/plans" component={Plans}></Route>
        <Route path="/buy" component={BuyPlans}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
