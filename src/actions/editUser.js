import API from "../api/api";

const editUser = ({ id, inputValues, closeModal }) => {
  API.patch(`user/${id}`, [
    { "propName": "picture", "value": inputValues.picture },
    { "propName": "username", "value": inputValues.username },
    { "propName": "email", "value": inputValues.email },
    { "propName": "bio", "value": inputValues.bio },
  ])
    .then((res) => {
      closeModal();
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    })
    .catch((err) => err);
};

export default editUser;
