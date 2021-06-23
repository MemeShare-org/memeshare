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
          onClick={() => {
            document.body.style.overflow = "hidden";
            setIsOpen(true);
          }}
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
          <code>{user.followers.length}</code> followers
        </span>
        <span>
          <code>{user.following.length}</code> following
        </span>
      </ProfileStats>
      <ProfileBio>{user.bio}</ProfileBio>
    </ProfileCardDiv>
  );
};

export default ProfileCard;
