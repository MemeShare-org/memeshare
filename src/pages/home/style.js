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

export const CoolDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19vh;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
  }

  div h2 {
    color: white;
  }

  div button {
    padding: 8px;
  }
`;

export const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5vh;
`;

export const EmptyPostsTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: white;
`;
