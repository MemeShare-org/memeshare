import React from "react";
import { useHistory } from "react-router-dom";
import PostDetails from "./post-details";
import { PostDiv, TopPostDiv, AuthorDiv } from "./style";

const Post = ({ postId, PostDate, Title, Author, Upload }) => {
  const history = useHistory();
  var fomateDate = new Date(PostDate);

  return (
    <PostDiv className='post'>
      <TopPostDiv>
        <AuthorDiv>
          <img
            src={Author.picture}
            alt={Author.username}
            title={Author.username}
            onClick={() => history.push(`/u/${Author.username}`)}
          />
          <span onClick={() => history.push(`/u/${Author.username}`)}>
            {Author.username}
          </span>
          <label>{`${fomateDate.getFullYear()}/${
            fomateDate.getMonth() + 1
          }/${fomateDate.getDate()}`}</label>
        </AuthorDiv>
        <PostDetails postId={postId} />
      </TopPostDiv>
      <h2>{Title}</h2>
      <img src={Upload} alt={Title} title={Title} />
    </PostDiv>
  );
};

export default Post;
