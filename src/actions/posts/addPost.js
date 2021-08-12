import API from "../../api/api";
import { toast } from "react-toastify";

const addPost = ({ post, setIsLoading }) => {
  API.post("/post", post)
    .then((res) => {
      toast.success("Posted Successfully!");
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = `/p/${res.data.postId}`;
      }, 1500);
    })
    .catch((err) => console.error(err));
};

export default addPost;
