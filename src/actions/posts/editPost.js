import API from "../../api/api";

const editPost = ({ id, title, memeURL, history }) => {
  API.patch(`post/${id}`, [
    { propName: "title", value: title },
    { propName: "image", value: memeURL },
  ])
    .then(() => {
      history.push(`/p/${id}`);
    })
    .catch((err) => err);
};

export default editPost;
