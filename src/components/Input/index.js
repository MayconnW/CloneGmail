import React from "react";

import { Container } from "./style";

export default function Input({ label, type, required, onChange, value }) {
  const id = Math.random()
    .toString(36)
    .substring(9);
  return (
    <Container>
      <input
        id={id}
        type="text"
        required={required ? "required" : null}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}
