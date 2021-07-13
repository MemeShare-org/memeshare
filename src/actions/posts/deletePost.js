import API from "../../api/api";
import { toast } from "react-toastify";

const deletePost = ({ userId, postId }) => {
  const Confirm = window.confirm("Are you sure you want to delete your post?");

  if (Confirm === true) {
    API.delete(`/post/${userId}/${postId}`)
      .then(() => {
        toast.success("Deleted the post successfully!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      })
      .catch((err) => console.error(err));
  }
};

export default deletePost;
