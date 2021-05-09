import React, { useState } from "react";
import { useParams } from "react-router";
import Post from "../../components/post/index";

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({
    id: id,
    date: "2/5/2021",
    author: {
      picture:
        "https://avatars.githubusercontent.com/u/45138843?s=400&u=0a23c06a5fc819e6895feb49d1e3bf6816a2fe29&v=4",
      username: "iLaD",
    },
    upload: "https://i.redd.it/gno9rwueyhv61.jpg",
  });

  return (
    <div>
      <Post
        key={index}
        Id={post.id}
        Date={post.date}
        Author={post.author}
        Upload={post.upload}
      />
    </div>
  );
};

export default PostPage;
