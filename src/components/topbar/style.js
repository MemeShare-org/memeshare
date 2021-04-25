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
    right: 25%;
    width: 40%;
  }

  button {
    position: fixed;
    top: 20px;
    right: 50px;
  }

  svg {
    font-size: 50px;
    color: lightblue;
  }

  @media screen and (max-width: 768px) {
    input {
      right: 20%;
      width: 50%;
    }
    button {
      position: fixed;
      top: 10px;
      right: 0px;
    }
    svg {
      font-size: 60px;
      color: white;
    }
    .logo {
      position: fixed;
      left: -30px;
    }
    .header {
      display: none;
    }
  }
`;
