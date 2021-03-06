import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import UserContext from "../../context/userContext";
import getUser from "../../actions/user/getUser";
import getPost from "../../actions/posts/getPost";
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
  const [friends, setFriends] = useState([]);
  const [post, setPost] = useState({
    _id: "",
    title: "",
    image: "",
    date: "",
    author: {},
  });

  var postId = id;
  useEffect(() => {
    var id = user.username;

    getUser({ id, setProfile, setLoading });
    getPost({ postId, setPost });
  }, [id, user, postId, setProfile]);

  useEffect(() => {
    setFriends(profile.following);
  }, [profile]);

  useEffect(() => (document.title = `Memeshare | ${post.title}`), [post]);

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
              Conditions={
                post.author._id === user.userId || profile.role === "admin"
              }
              post={post}
            />
          </PostDiv>
        </div>
      )}
    </div>
  );
};

export default PostPage;
