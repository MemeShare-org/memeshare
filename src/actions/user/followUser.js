import API from "../../api/api";

const followUser = ({ setIsFollowed, followerId, followingId }) => {
  API.patch("/user/follow", {
    followerId: followerId,
    followingId: followingId,
  })
    .then(() => setIsFollowed(true))
    .catch((err) => err);
};

export default followUser;
