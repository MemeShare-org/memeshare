import React from "react";
import { FriendsListDiv, FriendsDiv, FriendDiv } from "./style";

const FriendsList = ({ friends }) => (
  <FriendsListDiv>
    <h1>Friends list</h1>
    <FriendsDiv>
      {friends.map((friend, index) => (
        <FriendDiv key={index}>
          <img
            src={friend.picture}
            title={friend.username}
            alt={friend.username}
          />
          <span>{friend.username}</span>
        </FriendDiv>
      ))}
    </FriendsDiv>
  </FriendsListDiv>
);

export default FriendsList;
