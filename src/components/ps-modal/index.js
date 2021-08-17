import React from "react";
import Modal from "react-modal";
import ClearIcon from "@material-ui/icons/Clear";
import { TopDiv } from "./style";

const PSModal = ({ IsOpen, setIsOpen, ModalTitle, Content }) => {
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
    setIsOpen({
      profileModal: false,
      postModal: false,
      followersModal: false,
      followingModal: false,
    });
    document.body.style.overflow = "unset";
  }

  Modal.setAppElement("#root");

  return (
    <Modal isOpen={IsOpen} onRequestClose={closeModal} style={customStyles}>
      <TopDiv>
        <h2>{ModalTitle}</h2>
        <ClearIcon onClick={() => closeModal()} />
      </TopDiv>
      {Content}
    </Modal>
  );
};

export default PSModal;
