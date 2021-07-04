import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import API from "../../api/api";
import UserContext from "../../context/userContext";
import getUser from "../../actions/user/getUser";
import followUser from "../../actions/user/followUser";
import unFollowUser from "../../actions/user/unFollowUser";
import Loader from "../../components/loader";
import Topbar from "../../components/topbar/index";
import ProfileCard from "../../components/profile-card/index";
import FriendsList from "../../components/friends-list/index";
import ProfileModal from "../../components/profile-modal/index";
import ProfileMenu from "../../components/profile-menu";
import Post from "../../components/post/index";
import {
  LoaderDiv,
  PCDiv,
  ProfileDiv,
  ProfileCardDiv,
  Div,
  TopProfileDiv,
  ProfileStats,
  ProfileBio,
  PostsDiv,
} from "./style";
import { EmptyPostsTitle } from "../home/style";

const Profile = () => {
  const { id } = useParams();

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [userData, setUserData] = useState({});
  const [friends] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);

  const checkIfFollowed = ({ followers, user }) => {
    for (var i = 0; i < followers.length; i++) {
      if (followers[i]._id === user.userId) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  };

  useEffect(() => {
    var username = user.username;

    getUser({ id, setProfile, setLoading });

    if (username === id) return;
    else {
      API.get(`/user/${username}`)
        .then((res) => setUserData(res.data))
        .catch((err) => err);
    }
  }, [id, user]);

  useEffect(() => {
    if (user.username === id) setUserData(profile);
  }, [id, user, profile]);

  useEffect(() => {
    var followers = profile.followers || [];

    checkIfFollowed({ followers, user });
  }, [profile, user]);

  const handleFollowing = () => {
    var followerId = profile._id;
    var followingId = userData._id;

    var followerData = {
      picture: profile.picture,
      username: profile.username,
      _id: profile._id,
    };
    var followingData = {
      picture: userData.picture,
      username: userData.username,
      _id: userData._id,
    };

    profile.followers.push(followingData);
    userData.following.push(followerData);

    followUser({ setIsFollowed, followerId, followingId });
  };

  const handleUnFollowing = () => {
    var followerId = profile._id;
    var followingId = userData._id;

    for (var i = 0; i < profile.followers.length; i++) {
      if (profile.followers[i]._id === user.userId) {
        profile.followers.splice(i, 1);
      }
    }

    for (i = 0; i < userData.following.length; i++) {
      if (userData.following[i]._id === profile._id) {
        userData.following.splice(i, 1);
      }
    }

    unFollowUser({
      setIsFollowed,
      followerId,
      followingId,
    });
  };

  document.title = `MemeShare | ${id}`;
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
            <ProfileCard user={userData} setIsOpen={setIsOpen} />
            <ProfileModal
              user={userData}
              setUser={setUserData}
              IsOpen={IsOpen}
              setIsOpen={setIsOpen}
            />
          </PCDiv>
          <FriendsList friends={friends} />
          <ProfileDiv>
            <ProfileCardDiv>
              <Div>
                <TopProfileDiv>
                  <img
                    src={profile.picture}
                    alt={profile.username}
                    title={profile.username}
                  />
                  <span>{profile.username}</span>
                  {user.userId === profile._id ? (
                    ""
                  ) : isFollowed ? (
                    <button className='follow-btn' onClick={handleUnFollowing}>
                      Unfollow
                    </button>
                  ) : (
                    <button className='follow-btn' onClick={handleFollowing}>
                      Follow
                    </button>
                  )}
                </TopProfileDiv>
                <ProfileMenu
                  user={user}
                  profile={profile}
                  setIsOpen={setIsOpen}
                />
              </Div>
              <ProfileStats>
                <span>
                  <number>{(profile.posts || []).length}</number> posts
                </span>
                <span>
                  <number>{(profile.followers || []).length}</number> followers
                </span>
                <span>
                  <number>{(profile.following || []).length}</number> following
                </span>
              </ProfileStats>
              <ProfileBio>{profile.bio || "The bio is empty."}</ProfileBio>
            </ProfileCardDiv>
            {profile.posts.length ? (
              <PostsDiv>
                {profile.posts.map((post, index) => (
                  <Post
                    key={index}
                    Id={post.id}
                    PostDate={post.date}
                    Title={post.title}
                    Author={post.author}
                    Upload={post.image}
                  />
                ))}
              </PostsDiv>
            ) : (
              <EmptyPostsTitle>There is no posts.</EmptyPostsTitle>
            )}
          </ProfileDiv>
        </div>
      )}
    </div>
  );
};

export default Profile;
