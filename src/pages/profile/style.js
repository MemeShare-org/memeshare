import styled from "styled-components";

export const LoaderDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
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

  svg {
    color: white;
  }
`;

export const TopProfileDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    cursor: pointer;
  }

  span {
    font-size: 25px;
    color: white;
    cursor: pointer;
    margin-left: 10px;
  }

  button {
    margin: 0px;
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
