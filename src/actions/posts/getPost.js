import API from "../../api/api";

const getPost = ({ id, setPost }) => {
  API.get(`/post/${id}`)
    .then((res) => setPost(res.data))
    .catch((err) => console.error(err));
};

export default getPost;
