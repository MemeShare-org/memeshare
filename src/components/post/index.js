import React from "react";
import PostDetails from "./post-details";
import { PostDiv, TopPostDiv, AuthorDiv } from "./style";

const Post = ({ Date, Author, Upload }) => {
  return (
    <PostDiv>
      <TopPostDiv>
        <AuthorDiv>
          <img
            src={Author.picture}
            alt={Author.username}
            title={Author.username}
          />
          <span>{Author.username}</span>
        </AuthorDiv>
        <PostDetails />
      </TopPostDiv>
      <img src={Upload} alt={Author.username} title={Author.username} />
    </PostDiv>
  );
};

export default Post;
