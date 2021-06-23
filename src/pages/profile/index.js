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
import {
  LoaderDiv,
  PCDiv,
  ProfileDiv,
  ProfileCardDiv,
  Div,
  TopProfileDiv,
  ProfileStats,
  ProfileBio,
} from "./style";

const Profile = () => {
  const { id } = useParams();

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [userData, setUserData] = useState({});
  const [friends] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    var username = user.username;

    getUser({ id, setProfile, setLoading });

    if (username === id) return;
    else {
      API.get(`/user/${username}`)
        .then((res) => setUserData(res.data))
        .catch((err) => err);
    }

    document.title = `MemeShare | ${id}`;
  }, [id, user, setProfile]);

  useEffect(() => {
    if (user.username === id) setUserData(profile);
  }, [id, user, profile]);

  useEffect(() => {
    var followers = profile.followers || [];

    followers.forEach((element) => {
      if (element === user.userId) setIsFollowed(true);
      else setIsFollowed(false);
    });
  }, [profile, user]);

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
                    <button
                      className='follow-btn'
                      onClick={() => {
                        var followerId = profile._id;
                        var followingId = userData._id;

                        unFollowUser({
                          setIsFollowed,
                          followerId,
                          followingId,
                        });
                      }}>
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className='follow-btn'
                      onClick={() => {
                        var followerId = profile._id;
                        var followingId = userData._id;

                        followUser({ setIsFollowed, followerId, followingId });
                      }}>
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
                  <number>0</number> posts
                </span>
                <span>
                  <number>0</number> followers
                </span>
                <span>
                  <number>0</number> following
                </span>
              </ProfileStats>
              <ProfileBio>{profile.bio || "The bio is empty."}</ProfileBio>
            </ProfileCardDiv>
          </ProfileDiv>
        </div>
      )}
    </div>
  );
};

export default Profile;
