import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar></NavigationBar>
        <h1 className="heading">Getting Started</h1>
        <p>
          Welcome to <code>Typist.</code> Start as a guest, or create an
          account.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          A message from the developer.
        </a>
      </header>
    </div>
  );
}

export default App;
