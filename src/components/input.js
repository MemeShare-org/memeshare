import React from "react";

const Input = ({ Title, Type, Value, onChange }) => (
  <input placeholder={Title} type={Type} value={Value} onChange={onChange} />
);

export default Input;
