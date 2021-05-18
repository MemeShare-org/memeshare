import React from "react";

const Button = ({ Title, Type, Disable, onClick }) => <button type={Type} disabled={Disable} onClick={onClick}>{Title}</button>;

export default Button;
