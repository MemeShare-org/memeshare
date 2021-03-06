import styled from "styled-components";

export const FriendsListDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 19.5vh;
  margin-left: 20px;

  h1 {
    text-align: left;
    color: gold;
  }

  label {
    text-align: left;
    color: #5d7290;
    margin: 5px 0px 10px 0px;
  }
`;

export const FriendsDiv = styled.div`
  width: 30vh;
  height: 70vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #242c37;
    border-radius: 3px;

    &:hover {
      background: #242c3785;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    height: 55vh;
    color: #fff;
  }
`;
