import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import { InputProvider } from "./InputContext";

function App() {
  return (
    <InputProvider>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </InputProvider>
  );
}

export default App;
