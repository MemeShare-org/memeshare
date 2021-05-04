import React from "react";
import Friend from "../friend/index";
import { FriendsListDiv, FriendsDiv } from "./style";

const FriendsList = ({ friends }) => (
  <FriendsListDiv>
    <h1>Friends list</h1>
    <span>Online</span>
    <FriendsDiv>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </FriendsDiv>
  </FriendsListDiv>
);

export default FriendsList;
