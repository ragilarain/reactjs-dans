import React from "react";
import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function FormSignIn({
  form,
  handleChange,
  isLoading,
  handleSubmit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Username"
        type="username"
        placeholder="Enter Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <SButton
        loading={isLoading}
        disabeld={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Submit
      </SButton>
    </Form>
  );
}
