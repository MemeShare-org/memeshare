import styled from "styled-components";

export const Title = styled.h2`
  color: white;
`;

export const FormDiv = styled.div`
  margin-top: 10px;
  label {
    color: #5d7290;
  }

  input, textarea {
      width: 90%;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
      margin: 10px 10px 10px 5px;
  }

  span {
      text-decoration: underline;
      cursor: pointer;
      color: white;
      margin: 10px;
  }
`;