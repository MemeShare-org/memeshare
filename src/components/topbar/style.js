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

  @media screen and (max-width: 768px) {
    .logo {
      left: 2px;
    }

    input {
      width: 75%;
      right: 2.5%;
    }

    svg {
      display: none;
    }

    .header {
      display: none;
    }
  }
`;

export const ScrollTopbar = styled.div`
  position: fixed;
  top: 0px;
  background-color: #242c37;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 70px;
  input {
    font-size: 18px;
    position: fixed;
    right: 30%;
    width: 40%;
    margin: 0px;
    background-color: #0b0e11;
  }
  button {
    position: fixed;
    top: 0px;
    right: 50px;
  }
  svg {
    font-size: 50px;
    color: white;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;

    .logo {
      left: 2px;
    }

    input {
      width: 75%;
      right: 2.5%;
    }

    svg {
      display: none;
    }

    .header {
      display: none;
    }
  }
`;
