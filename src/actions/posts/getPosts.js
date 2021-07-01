import API from "../../api/api";

const getPosts = ({ setPosts }) => {
  API.get(`/post`)
    .then((res) => {
      setPosts(res.data);
      console.log(res.data);
    })
    .catch((err) => console.error(err));
};

export default getPosts;
