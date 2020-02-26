import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import fire from "../config/fire";

export default function SignUpForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    validateForm();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
    console.log("handle submit done!");

    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = "/";
      } else {
        // No user is signed in.
      }
    });
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
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Confirm Password</label>
        <FormInput
          type="confirmpassword"
          id="confirmpassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button onClick={handleSubmit} theme="success">
          Sign up
        </Button>
      </FormGroup>
    </Form>
  );
}
