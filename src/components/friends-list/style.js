import styled from "styled-components";

export const FriendsListDiv = styled.div`
  position: fixed;
  top: 18.5vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 20px;

  h1 {
    text-align: left;
    color: gold;
  }

  @media screen and (max-width: 768px) {
    display: none;
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
`;

export const FriendDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  span {
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin-left: 10px;
  }
`;
