import styled from "styled-components";

export const ProfileCardDiv = styled.div`
  position: fixed;
  top: 20vh;
  display: flex;
  flex-direction: column;
  background-color: #242c37;
  border-radius: 10px;
  width: 300px;
  height: auto;
`;

export const ProfileDiv = styled.div`
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
  font-size: 15px;
  text-align: left;
  margin: 15px 0px 20px 15px;
  max-width: 300px;
  overflow-wrap: break-word;
  color: white;
`;
