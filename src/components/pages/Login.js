import React, { useState } from "react";

import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

function Login() {
  const [mode, setMode] = useState("Login");

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">{mode}</h1>
        <LoginForm></LoginForm>
        <SignUpForm></SignUpForm>
      </header>
    </div>
  );
}

export default Login;
