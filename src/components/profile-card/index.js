import React from "react";
import { useHistory } from "react-router-dom";
import { ProfileCardDiv, ProfileDiv, ProfileStats, ProfileBio } from "./style";

const ProfileCard = ({ user, setIsOpen }) => {
  const history = useHistory();

  return (
    <ProfileCardDiv>
      <ProfileDiv>
        <img
          src={user.picture}
          title={user.username}
          alt={user.username}
          onClick={() => setIsOpen(true)}
        />
        <span onClick={() => history.push(`/u/${user.username}`)}>
          {user.username}
        </span>
      </ProfileDiv>
      <ProfileStats>
        <span>
          <code>0</code> posts
        </span>
        <span>
          <code>0</code> followers
        </span>
        <span>
          <code>0</code> following
        </span>
      </ProfileStats>
      <ProfileBio>{user.bio}</ProfileBio>
    </ProfileCardDiv>
  );
};

export default ProfileCard;
