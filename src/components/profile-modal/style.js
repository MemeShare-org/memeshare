import styled from "styled-components";

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: white;
  }

  svg {
    cursor: pointer;
    color: red;
  }
`;

export const FormDiv = styled.div`
  margin-top: 10px;
  margin-right: 15px;

  label {
    color: #5d7290;
  }

  input,
  textarea {
    width: 100%;
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
