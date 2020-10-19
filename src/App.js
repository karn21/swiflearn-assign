import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/pricing" component={Plans}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
