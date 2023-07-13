import React from "react";
import { Form } from "react-bootstrap";

export default function SearchInput({ handleChange, query, disabled }) {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        disabled={disabled}
        type="text"
        name="query"
        value={query}
        placeholder="Masukan pencarian disini"
        onChange={handleChange}
      />
    </Form.Group>
  );
}
