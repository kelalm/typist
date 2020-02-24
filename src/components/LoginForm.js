import React from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";

export default function LoginForm() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
        <Button theme="success">Log in</Button>
      </FormGroup>
    </Form>
  );
}
