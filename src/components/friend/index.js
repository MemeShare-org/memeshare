import React from "react";
import { FriendDiv } from "./style";

const Friend = ({ friend }) => (
  <FriendDiv>
    <img src={friend.picture} title={friend.username} alt={friend.username} />
    <span>{friend.username}</span>
  </FriendDiv>
);

export default Friend;
