import React from "react";
import { ProfileCardDiv, ProfileDiv, ProfileStats, ProfileBio } from "./style";

const ProfileCard = ({ user, setIsOpen }) => (
  <ProfileCardDiv>
    <ProfileDiv>
      <img
        src={user.picture}
        title={user.username}
        alt={user.username}
        onClick={() => setIsOpen(true)}
      />
      <span>{user.username}</span>
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
    <ProfileBio>
      {user.bio}
    </ProfileBio>
  </ProfileCardDiv>
);

export default ProfileCard;
