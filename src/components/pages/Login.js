import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Login</h1>
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

export default Login;
