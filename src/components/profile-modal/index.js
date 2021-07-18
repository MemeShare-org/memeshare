import React, { useState, useEffect } from "react";
import editUser from "../../actions/user/editUser";
import Modal from "react-modal";
import Input from "../input";
import Button from "../button";
import ClearIcon from "@material-ui/icons/Clear";
import { TopDiv, FormDiv, ButtonsDiv } from "./style";

const ProfileModal = ({ user, IsOpen, setIsOpen }) => {
  const [inputValues, setInputValues] = useState({
    username: user.username,
    email: user.email,
    bio: user.bio,
    picture: user.picture,
  });

  useEffect(() => {
    setInputValues({
      username: user.username,
      email: user.email,
      bio: user.bio,
      picture: user.picture,
    });
  }, [user]);

  const customStyles = {
    overlay: {
      background: "#0b0e1175",
      zIndex: "2",
    },
    content: {
      width: "50vh",
      height: "50vh",
      overflow: "hidden",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "6px",
      background: "#151a21",
    },
  };

  function closeModal() {
    document.body.style.overflow = "unset";
    setIsOpen({
      profileModal: false,
      postModal: false,
      followersModal: false,
      followingModal: false,
    });
  }

  return (
    <div>
      <Modal
        isOpen={IsOpen.profileModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <TopDiv>
          <h2>Edit Profile</h2>
          <ClearIcon onClick={() => closeModal()} />
        </TopDiv>
        <FormDiv>
          <div>
            <label style={customStyles.label}>Avatar URL</label>
            <Input
              Value={inputValues.picture}
              onChange={(e) =>
                setInputValues({ ...inputValues, picture: e.target.value })
              }
            />
          </div>
          <div>
            <label style={customStyles.label}>Username</label>
            <Input
              Value={inputValues.username}
              onChange={(e) =>
                setInputValues({ ...inputValues, username: e.target.value })
              }
            />
          </div>
          <div>
            <label style={customStyles.label}>Email</label> <br />
            <Input
              Value={inputValues.email}
              onChange={(e) =>
                setInputValues({ ...inputValues, email: e.target.value })
              }
            />
          </div>
          <div>
            <label style={customStyles.label}>Bio</label> <br />
            <textarea
              value={inputValues.bio}
              onChange={(e) =>
                setInputValues({ ...inputValues, bio: e.target.value })
              }
            />
          </div>
          <ButtonsDiv>
            <Button
              Title='Save'
              onClick={() => {
                var id = user._id;
                editUser({ id, inputValues, closeModal });
              }}
            />
            <span onClick={() => closeModal()}>Cancel</span>
          </ButtonsDiv>
        </FormDiv>
      </Modal>
    </div>
  );
};

export default ProfileModal;
