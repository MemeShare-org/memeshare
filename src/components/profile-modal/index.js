import React from "react";
import Modal from "react-modal";
import Input from "../input";
import Button from "../button";
import { Title, FormDiv, ButtonsDiv } from "./style";

const ProfileModale = ({ IsOpen, setIsOpen }) => {
  const customStyles = {
    overlay: {
      background: "#0b0e1175",
    },
    content: {
      width: "25%",
      height: "52%",
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
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={IsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <Title>Edit Profile</Title>
        <FormDiv>
          <div>
            <label style={customStyles.label}>Avatar URL</label>
            <Input />
          </div>
          <div>
            <label style={customStyles.label}>Username</label>
            <Input />
          </div>
          <div>
            <label style={customStyles.label}>Email</label> <br />
            <Input />
          </div>
          <div>
            <label style={customStyles.label}>Bio</label> <br />
            <textarea />
          </div>
          <ButtonsDiv>
            <Button Title='Save' />
            <span onClick={() => closeModal()}>Cancel</span>
          </ButtonsDiv>
        </FormDiv>
      </Modal>
    </div>
  );
};

export default ProfileModale;
