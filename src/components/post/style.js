import styled from "styled-components";

export const PostDiv = styled.div`
  background-color: #242c37;
  border-radius: 6px;
  width: 40%;
  height: 60%;
  margin: 10px 0px 15px 0px;

  img {
    width: 600px;
    height: 82.5%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;

    img {
      width: 95%;
    }
  }
`;

export const TopPostDiv = styled.div`
  background-color: #242c37;
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
  padding: 10px;

  img {
    border-radius: 50px;
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 20px;
    color: white;
    margin-left: 10px;
  }
`;
