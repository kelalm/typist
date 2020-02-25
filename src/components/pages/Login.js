import React from "react";

import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Login</h1>
        <LoginForm></LoginForm>
      </header>
    </div>
  );
}

export default Login;
