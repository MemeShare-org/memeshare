import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/userContext";
import getUser from "../../actions/user/getUser";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import BottomBar from "../../components/bottombar";
import ProfileCard from "../../components/profile-card/index";
import ProfileModal from "../../components/profile-modal/index";
import FriendsList from "../../components/friends-list/index";
import Post from "../../components/post/index";
import { LoaderDiv, HomeDiv, PCDiv, PostsDiv } from "./style";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [IsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [friends] = useState([
    {
      picture: "https://i.imgur.com/wRGlbCe_d.webp?maxwidth=760&fidelity=grand",
      username: "Jack",
    },
    {
      picture:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      username: "Lara",
    },
    {
      picture:
        "https://images.pexels.com/photos/3993416/pexels-photo-3993416.jpeg",
      username: "Steven",
    },
    {
      picture:
        "https://images.pexels.com/photos/4693311/pexels-photo-4693311.jpeg",
      username: "Erica",
    },
    {
      picture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      username: "Michel",
    },
    {
      picture:
        "https://images.pexels.com/photos/4005374/pexels-photo-4005374.jpeg",
      username: "Lexi",
    },
    {
      picture:
        "https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg",
      username: "Billy",
    },
    {
      picture:
        "https://images.pexels.com/photos/5970737/pexels-photo-5970737.jpeg",
      username: "Pierson",
    },
    {
      picture:
        "https://images.pexels.com/photos/4015706/pexels-photo-4015706.jpeg",
      username: "James",
    },
    {
      picture:
        "https://images.pexels.com/photos/4499805/pexels-photo-4499805.jpeg",
      username: "Stefanie",
    },
    {
      picture:
        "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg",
      username: "Brent",
    },
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

  const matches = useMediaQuery("(max-width:768px)");

  var id = user.username;

  useEffect(() => {
    document.title = "MemeShare | Home";
    getUser({ id, setProfile, setLoading });
  }, [id, setProfile]);

  return (
    <HomeDiv>
      {loading ? (
        <LoaderDiv>
          <Loader loading={loading} />
        </LoaderDiv>
      ) : (
        <>
          <Topbar user={user} setUser={setUser} />
          {matches ? <BottomBar /> : ""}
          <PCDiv>
            <ProfileCard user={profile} setIsOpen={setIsOpen} />
            <ProfileModal
              user={profile}
              setUser={setProfile}
              IsOpen={IsOpen}
              setIsOpen={setIsOpen}
            />
          </PCDiv>
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
            <h1>Your feed is empty</h1>
          )}
        </>
      )}
    </HomeDiv>
  );
};

export default Home;
