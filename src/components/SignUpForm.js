import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";

export default function SignUpForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
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
