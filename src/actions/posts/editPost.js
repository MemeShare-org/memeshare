import API from "../../api/api";

const editPost = ({ id, title, memeURL }) => {
  API.patch(`post/${id}`, [
    { propName: "title", value: title },
    { propName: "image", value: memeURL },
  ])
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => err);
};

export default editPost;
