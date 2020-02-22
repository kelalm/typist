import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListGroupItemHeading } from "shards-react";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavigationBar></NavigationBar>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
