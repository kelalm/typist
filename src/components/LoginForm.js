import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import fire from "../config/fire";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    validateForm();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(user) {
        if (user) {
          window.location = "/";
        } else {
          // No user is signed in.
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
    console.log("handle submit done!");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <FormInput
          id="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} theme="success">
          Log in
        </Button>
      </FormGroup>
    </Form>
  );
}
