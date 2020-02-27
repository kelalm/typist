import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import Leaderboards from "./components/pages/Leaderboards";
import Login from "./components/pages/Login";
import Race from "./components/pages/Race";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListGroupItemHeading } from "shards-react";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header container">
          <NavigationBar></NavigationBar>
        </header>
        <body>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/leaderboards" component={Leaderboards}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/race" component={Race}></Route>
            </Switch>
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;
