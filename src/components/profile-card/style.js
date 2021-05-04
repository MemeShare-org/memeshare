import styled from "styled-components";

export const ProfileCardDiv = styled.div`
  position: fixed;
  top: 20vh;
  right: 15px;
  display: flex;
  flex-direction: column;
  background-color: #242c37;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }

  span {
    font-size: 25px;
    color: white;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  justify-content: space-around;
  color: #5d7290;

  code {
    color: white;
  }
`;

export const ProfileBio = styled.div`
  margin: 2.5vh 10px 0px 10px;
  color: white;
`;
