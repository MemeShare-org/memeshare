import React from "react";
import Topbar from "../../components/topbar/index";
import Post from "../../components/post/index";
import { HomeDiv, PostsDiv } from "./style";

const Home = () => (
  <HomeDiv>
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
      <Post
        Id='2'
        Date='23/4/2021'
        Author={{
          picture:
            "https://deadline.com/wp-content/uploads/2020/11/Stephen-Lang-Headshot-Matt-Sayles-e1605093774374.jpg?w=681&h=383&crop=1",
          username: "Your Daddy",
        }}
        Upload='https://i.redd.it/gno9rwueyhv61.jpg'
      />
    </PostsDiv>
  </HomeDiv>
);

export default Home;
