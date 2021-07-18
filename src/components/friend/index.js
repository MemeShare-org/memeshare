import React from "react";
import { FriendDiv } from "./style";

const Friend = ({ friend }) => (
  <FriendDiv>
    <img src={friend.picture} title={friend.username} alt={friend.username} />
    <span onClick={() => (window.location.href = `/u/${friend.username}`)}>
      {friend.username}
    </span>
  </FriendDiv>
);

export default Friend;
