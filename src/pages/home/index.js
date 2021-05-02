import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import Post from "../../components/post/index";
import { LoaderDiv, HomeDiv, PostsDiv } from "./style";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts] = useState([
    {
      id: "564675765756765756",
      date: "2/5/2021",
      author: {
        picture: "https://avatars.githubusercontent.com/u/45138843?s=400&u=0a23c06a5fc819e6895feb49d1e3bf6816a2fe29&v=4",
        username: "iLaD",
      },
      upload: "https://i.redd.it/gno9rwueyhv61.jpg",
    }
  ]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <HomeDiv>
      {loading ? (
        <LoaderDiv>
          <Loader loading={loading} />
        </LoaderDiv>
      ) : (
        <>
          <Topbar />
          {posts.length ? (
            <PostsDiv>
              {posts.map((post, index) => (
                <Post
                  key={index}
                  Id={post.id}
                  Date={post.date}
                  Author={post.author}
                  Upload={post.upload}
                />
              ))}
            </PostsDiv>
          ) : (
            <h1>your blabla is empty</h1>
          )}
        </>
      )}
    </HomeDiv>
  );
};

export default Home;
