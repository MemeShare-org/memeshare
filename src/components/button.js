import React from "react";

const Button = ({ Title, Type, Disable }) => <button type={Type} disabled={Disable}>{Title}</button>;

export default Button;
