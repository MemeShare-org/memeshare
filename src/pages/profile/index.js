import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import API from "../../api/api";
import UserContext from "../../context/userContext";
import getUser from "../../actions/user/getUser";
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

  useEffect(() => {
    var username = user.username;
    getUser({ id, setProfile, setLoading });

    API.get(`/user/${username}`)
      .then((res) => setUserData(res.data))
      .catch((err) => err);

    document.title = `MemeShare | ${id}`;
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
                  ) : (
                    <button className='follow-btn'>Follow</button>
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
