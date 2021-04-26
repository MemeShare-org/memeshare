import React from "react";
import Topbar from "../../components/topbar/index";
import Post from "../../components/post/index";
import { HomeDiv } from "./style";

const Home = () => (
  <HomeDiv>
    <Topbar />
    <Post
      Date='23/4/2021'
      Author={{
        picture:
          "https://avatars.githubusercontent.com/u/45138843?s=400&u=0a23c06a5fc819e6895feb49d1e3bf6816a2fe29&v=4",
        username: "iLaD"
      }}
      Upload='https://i.redd.it/gno9rwueyhv61.jpg'
    />
  </HomeDiv>
);

export default Home;
