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
