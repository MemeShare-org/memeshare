import React from "react";
import { ProfileCardDiv, ProfileDiv, ProfileStats, ProfileBio } from "./style";

const ProfileCard = ({ user, setIsOpen }) => (
  <ProfileCardDiv>
    <ProfileDiv>
      <img
        src={
          "https://avatars.githubusercontent.com/u/45138843?s=400&u=0a23c06a5fc819e6895feb49d1e3bf6816a2fe29&v=4"
        }
        title={user.username}
        alt={user.username}
        onClick={() => setIsOpen(true)}
      />
      <span>{user.username}</span>
    </ProfileDiv>
    <ProfileStats>
      <span><code>0</code> posts</span>
      <span><code>0</code> followers</span>
      <span><code>0</code> following</span>
    </ProfileStats>
    <ProfileBio>
      A 13 years old front-end developer, I love building websites and
      contribute on open source.
    </ProfileBio>
  </ProfileCardDiv>
);

export default ProfileCard;
