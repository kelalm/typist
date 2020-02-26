import React, { useState, useEffect } from "react";
import { Button } from "shards-react";

import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

function Login() {
  const [mode, setMode] = useState("Login");
  const [modeButton, setModeButton] = useState("Create an account");

  function handleModeClick(event) {
    mode === "Login" ? setMode("Create an account") : setMode("Login");
    modeButton === "Login"
      ? setModeButton("Create an account")
      : setModeButton("Login");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">{mode}</h1>
        {mode === "Login" ? <LoginForm></LoginForm> : <SignUpForm></SignUpForm>}
        <Button theme="dark" onClick={handleModeClick}>
          {modeButton}
        </Button>
      </header>
    </div>
  );
}

export default Login;
