import styled from "styled-components";

export const PostDiv = styled.div`
  background-color: #242c37;
  border-radius: 6px;
  width: 40%;
  margin: 10px 0px 15px 0px;

  h2 {
    margin: -10px 0px 10px 15px;
    overflow-wrap: break-word;
    text-align: left;
    color: white;
  }

  img {
    width: 95%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 90%;

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
    margin: 0px;
    border-radius: 50px;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 20px;
    cursor: pointer;
    color: white;
    margin-left: 10px;
    margin-right: 5px;
  }

  label {
    color: #5d7290;
  }
`;
