import API from "../../api/api";

const getPost = ({ postId, setPost }) => {
  API.get(`/post/${postId}`)
    .then((res) => setPost(res.data))
    .catch((err) => console.error(err));
};

export default getPost;
