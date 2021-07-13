import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/userContext";
import getUser from "../../actions/user/getUser";
import getPosts from "../../actions/posts/getPosts";
import addPost from "../../actions/posts/addPost";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import BottomBar from "../../components/bottombar";
import ProfileCard from "../../components/profile-card/index";
import ProfileModal from "../../components/profile-modal/index";
import PostModal from "../../components/post-modal/index";
import FriendsList from "../../components/friends-list/index";
import Post from "../../components/post/index";
import {
  LoaderDiv,
  HomeDiv,
  PCDiv,
  TopPostsDiv,
  PostsDiv,
  EmptyPostsTitle,
} from "./style";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [IsOpen, setIsOpen] = useState({
    profileModal: false,
    postModal: false,
  });
  const [loading, setLoading] = useState(true);
  const [friends] = useState([]);
  const [posts, setPosts] = useState([]);

  const matches = useMediaQuery("(max-width:768px)");

  var id = user.username;

  useEffect(() => {
    document.title = "MemeShare | Home";
    getUser({ id, setProfile, setLoading });
    getPosts({ setPosts });
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
            <PostModal
              authorId={user.userId}
              addPost={addPost}
              IsOpen={IsOpen}
              setIsOpen={setIsOpen}
            />
          </PCDiv>
          <FriendsList friends={friends} />
          <TopPostsDiv>
            <div>
              <h2>Feed</h2>
              <button
                onClick={() =>
                  setIsOpen({
                    profileModal: false,
                    postModal: true,
                  })
                }>
                New
              </button>
            </div>
          </TopPostsDiv>
          {posts.length ? (
            <PostsDiv>
              {posts.map((post, index) => (
                <Post
                  key={index}
                  IsUserPost={post.author._id === user.userId}
                  PostId={post._id}
                  PostDate={post.date}
                  Title={post.title}
                  Author={post.author}
                  Upload={post.image}
                />
              ))}
            </PostsDiv>
          ) : (
            <EmptyPostsTitle>Your feed is empty</EmptyPostsTitle>
          )}
        </>
      )}
    </HomeDiv>
  );
};

export default Home;
