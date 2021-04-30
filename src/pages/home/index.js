import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import Post from "../../components/post/index";
import { LoaderDiv, HomeDiv, PostsDiv } from "./style";

const Home = () => {
  const [loading, setLoading] = useState(true);

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
          <PostsDiv>
            <Post
              Id='1'
              Date='23/4/2021'
              Author={{
                picture:
                  "https://avatars.githubusercontent.com/u/45138843?s=400&u=0a23c06a5fc819e6895feb49d1e3bf6816a2fe29&v=4",
                username: "iLaD",
              }}
              Upload='https://i.redd.it/gno9rwueyhv61.jpg'
            />
          </PostsDiv>
        </>
      )}
    </HomeDiv>
  );
};

export default Home;
