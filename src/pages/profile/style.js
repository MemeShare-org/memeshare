import styled from "styled-components";

export const LoaderDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PCDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  overflow: scroll;
  height: 80vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileCardDiv = styled.div`
  width: 40%;
  background-color: #242c37;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .follow-btn {
    padding: 8px;
    margin-left: 15px;
  }

  svg {
    color: white;
  }
`;

export const TopProfileDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      color: #5d7290;
      margin-left: 6px;
    }
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }

  span {
    font-size: 25px;
    color: white;
    margin-left: 10px;
  }

  button {
    margin: 0px;
  }

  .admin {
    margin-left: 5px;
    cursor: pointer;
    color: gold;
  }

  .verified {
    margin-left: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  margin: 0px 0px 0px 15px;
  color: #5d7290;

  span {
    cursor: pointer;
    margin-right: 10px;
  }

  number {
    color: white;
  }
`;

export const ProfileBio = styled.div`
  font-size: 16px;
  text-align: left;
  margin: 15px 0px 20px 15px;
  max-width: 450px;
  color: white;
`;

export const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  width: 100%;

  .post {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    .post {
      width: 80%;
    }
  }
`;
