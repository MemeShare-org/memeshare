import styled from "styled-components";

export const TopbarDiv = styled.div`
  position: fixed;
  top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  input {
    font-size: 18px;
    position: fixed;
    right: 30%;
    width: 40%;
    margin: 0px;
  }

  button {
    position: fixed;
    top: 10px;
    right: 50px;
  }

  svg {
    font-size: 50px;
    color: white;
  }
`;
