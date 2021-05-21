import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import UserContext from "../../context/userContext";
import getUser from "../../actions/getUser";
import Topbar from "../../components/topbar/index";
import FriendsList from "../../components/friends-list/index";
import { ProfileDiv, TopProfileDiv, ProfileBio } from "./style";

const Profile = () => {
  const { id } = useParams();

  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState({});
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
    getUser({ id, setProfile });
    document.title = `MemeShare | ${id}`;
  }, [id, setProfile]);

  return (
    <div>
      <Topbar user={user} setUser={setUser} />
      <FriendsList friends={friends} />

      <ProfileDiv>
        <div>
          <TopProfileDiv>
            <img
              src={profile.picture}
              alt={profile.username}
              title={profile.username}
            />
            <span>{profile.username}</span>
          </TopProfileDiv>
          <ProfileBio>{profile.bio}</ProfileBio>
        </div>
      </ProfileDiv>
    </div>
  );
};

export default Profile;
