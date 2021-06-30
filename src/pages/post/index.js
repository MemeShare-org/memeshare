import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import UserContext from "../../context/userContext";
import getUser from "../../actions/user/getUser";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import ProfileCard from "../../components/profile-card/index";
import ProfileModal from "../../components/profile-modal/index";
import FriendsList from "../../components/friends-list/index";
import Post from "../../components/post/index";
import { LoaderDiv, PCDiv, PostDiv } from "./style";

const PostPage = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [IsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [friends] = useState([]);
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

  useEffect(() => {
    var id = user.username;

    document.title = `MemeShare | Post`;
    getUser({ id, setProfile, setLoading });
  }, [id, user, setProfile]);

  return (
    <div>
      {loading ? (
        <LoaderDiv>
          <Loader loading={loading} />
        </LoaderDiv>
      ) : (
        <div>
          <Topbar user={user} setUser={setUser} />
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
          <PostDiv>
            <Post
              key={"435645645"}
              Id={post.id}
              Date={post.date}
              Author={post.author}
              Upload={post.upload}
            />
          </PostDiv>
        </div>
      )}
    </div>
  );
};

export default PostPage;
