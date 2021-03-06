import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import PostEditModal from "../post-edit-modal/index";
import PostDetails from "./post-details";
import { PostDiv, TopPostDiv, AuthorDiv } from "./style";

const Post = ({ Conditions, post }) => {
  const { _id, date, title, author, image } = post;
  const [IsOpen, setIsOpen] = useState(false);
  var userId = author._id;

  const history = useHistory();
  var formateDate = new Date(date);

  return (
    <PostDiv className="post">
      <PostEditModal post={post} IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <TopPostDiv>
        <AuthorDiv>
          <img
            src={author.picture}
            alt={author.username}
            title={author.username}
            onClick={() => history.push(`/u/${author.username}`)}
          />
          <span onClick={() => history.push(`/u/${author.username}`)}>
            {author.username}
          </span>
          <label>
            {moment({
              year: formateDate.getFullYear(),
              month: formateDate.getMonth(),
              days: formateDate.getDate(),
              hours: formateDate.getHours(),
              minutes: formateDate.getMinutes(),
              seconds: formateDate.getSeconds(),
            }).fromNow()}
          </label>
        </AuthorDiv>
        <PostDetails
          Conditions={Conditions}
          userId={userId}
          PostId={_id}
          setIsOpen={setIsOpen}
        />
      </TopPostDiv>
      <h2>{title}</h2>
      <img src={image} loading="lazy" alt={title} title={title} />
    </PostDiv>
  );
};

export default Post;
