import styled from "styled-components";

export const PostDiv = styled.div`
  background-color: #1f252e;
  border-radius: 6px;
  width: 40%;
  height: 60%;

  img {
    width: 600px;
    height: 82.5%;
  }
`;

export const TopPostDiv = styled.div`
  background-color: #1a1f26;
  border-radius: 6px 6px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: relative;
  top: -10px;

  svg {
    margin-right: 10px;
    cursor: pointer;
    color: black;
  }
`;

export const AuthorDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  img {
    border-radius: 50px;
    padding: 10px;
    width: 50px;
  }

  span {
    font-size: 20px;
    margin-left: 10px;
  }
`;
