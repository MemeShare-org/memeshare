import styled from "styled-components";

export const LoaderDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PCDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const TopPostsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19vh;
  margin-bottom: 6vh;

  div {
    background-color: #0b0e11;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 40%;
    z-index: 1;
  }

  div h2 {
    color: white;
  }

  div button {
    padding: 8px;
  }

  @media screen and (max-width: 768px) {
    div {
      width: 86%;
    }
  }
`;

export const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5vh;
  height: 70vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyPostsTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: white;
`;
