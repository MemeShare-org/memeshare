import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../button";
import ClearIcon from "@material-ui/icons/Clear";
import { TopDiv, FormDiv, ButtonsDiv } from "./style";

const PostSchema = Yup.object().shape({
  title: Yup.string().max(50, "Too Long!").required("Title is Required!"),
  memeURL: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Please enter a image link!"
    )
    .required("Please enter a image link!"),
});

const PostModal = ({ authorId, addPost, IsOpen, setIsOpen }) => {
  const [IsLoading, setIsLoading] = useState(false);
  const customStyles = {
    overlay: {
      background: "#0b0e1175",
      zIndex: "2",
    },
    content: {
      width: "50vh",
      height: "32vh",
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
    });
  }

  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={IsOpen.postModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TopDiv>
          <h2>New Post</h2>
          <ClearIcon onClick={() => closeModal()} />
        </TopDiv>
        <Formik
          initialValues={{ title: "", memeURL: "" }}
          validationSchema={PostSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            const post = {
              title: values.title,
              image: values.memeURL,
              authorId: authorId,
            };

            setSubmitting(false);
            setIsLoading(true);
            resetForm();
            addPost({ post, setIsLoading });
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <FormDiv>
                <div>
                  <label style={customStyles.label}>Title</label>
                  <Field
                    className={
                      errors.title && touched.title ? "error" : "succes"
                    }
                    type="text"
                    name="title"
                  />
                </div>
                <div>
                  <label style={customStyles.label}>Meme URL</label>
                  <Field
                    className={
                      errors.memeURL && touched.memeURL ? "error" : "succes"
                    }
                    type="url"
                    name="memeURL"
                  />
                </div>
                <ButtonsDiv>
                  <Button
                    IsLoading={IsLoading}
                    LoadingMessage="Posting.."
                    Type="submit"
                    Title="Post"
                    Disable={isSubmitting}
                  />
                  <span onClick={() => closeModal()}>Cancel</span>
                </ButtonsDiv>
              </FormDiv>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default PostModal;
