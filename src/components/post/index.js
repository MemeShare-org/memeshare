import React from "react";
import { useHistory } from "react-router-dom";
import PostDetails from "./post-details";
import { PostDiv, TopPostDiv, AuthorDiv } from "./style";

const Post = ({ Id, Date, Author, Upload }) => {
  const history = useHistory();

  return (
    <PostDiv>
      <TopPostDiv>
        <AuthorDiv onClick={() => history.push(`/u/${Author.username}`)}>
          <img
            src={Author.picture}
            alt={Author.username}
            title={Author.username}
          />
          <span>{Author.username}</span>
        </AuthorDiv>
        <PostDetails Id={Id} />
      </TopPostDiv>
      <img src={Upload} alt={Author.username} title={Author.username} />
    </PostDiv>
  );
};

export default Post;
