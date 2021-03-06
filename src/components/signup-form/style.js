import styled from "styled-components";

export const SignupFormDiv = styled.div`
  background-color: #151a21;
  border-radius: 8px;
  width: 300px;
  height: auto;
  padding: 20px;

  a {
    text-align: left;
    margin: 10px 0px 10px 15px;
    color: yellow;
  }

  .error {
    border: 1px solid red;
    color: red;

    ::placeholder {
      color: red;
    }
  }

  .succes {
    border: none;
    color: white;

    ::placeholder {
      color: white;
    }
  }
`;

export const SignupMessage = styled.div`
  text-align: left;
  margin: 10px 0px 10px 15px;

  h2 {
    font-size: 1.875rem;
    color: gold;
  }
  p {
    font-size: 15px;
    color: white;
  }
`;
