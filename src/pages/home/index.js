import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import FriendsList from "../../components/friends-list/index";
import Post from "../../components/post/index";
import { LoaderDiv, HomeDiv, PostsDiv } from "./style";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [friends] = useState([
    {
      picture: "https://i.imgur.com/wRGlbCe_d.webp?maxwidth=760&fidelity=grand",
      username: "Jack",
    },
    {
      picture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      username: "Michel",
    },
    {
      picture: "https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg",
      username: "Billy",
    }
  ]);
  const [posts] = useState([
    {
      id: "564675765756765756",
      date: "2/5/2021",
      author: {
        picture:
          "https://avatars.githubusercontent.com/u/45138843?s=400&u=0a23c06a5fc819e6895feb49d1e3bf6816a2fe29&v=4",
        username: "iLaD",
      },
      upload: "https://i.redd.it/gno9rwueyhv61.jpg",
    },
    {
      id: "564675765756765756",
      date: "2/5/2021",
      author: {
        picture:
          "https://b.thumbs.redditmedia.com/Rtu2Mw0L-mx7AeYtHKkbAh75jQbgzy_Hk2UIlLeZFSs.png",
        username: "RMBG",
      },
      upload: "https://i.redd.it/bdnmprwgbow61.jpg",
    },
    {
      id: "564675765756765756",
      date: "2/5/2021",
      author: {
        picture:
          "https://styles.redditmedia.com/t5_2zmfe/styles/communityIcon_k6po5keenhq61.png?width=256&s=60ef13f941680e157b2166526b7d8458ef36d439",
        username: "saadmen",
      },
      upload: "https://i.redd.it/7jm776qo9kw61.png",
    },
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
          <FriendsList friends={friends} />
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
