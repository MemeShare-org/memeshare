import React from "react";

const Button = ({
  IsLoading,
  LoadingMessage,
  Title,
  Type,
  Disable,
  onClick,
}) => (
  <>
    {IsLoading ? (
      <button type={Type} disabled={Disable} onClick={onClick}>
        {LoadingMessage}
      </button>
    ) : (
      <button type={Type} disabled={Disable} onClick={onClick}>
        {Title}
      </button>
    )}
  </>
);

export default Button;
