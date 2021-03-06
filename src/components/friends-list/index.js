import React from "react";
import Friend from "../friend/index";
import { FriendsListDiv, FriendsDiv } from "./style";

const FriendsList = ({ friends }) => (
  <FriendsListDiv>
    <h1>Friends list</h1>
    <label>Online</label>
    <FriendsDiv>
      {friends.length ? (
        friends.map((friend, index) => <Friend key={index} friend={friend} />)
      ) : (
        <h2>Your Friends list is empty</h2>
      )}
    </FriendsDiv>
  </FriendsListDiv>
);

export default FriendsList;
