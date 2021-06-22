import API from "../../api/api";

const unFollowUser = ({ setIsFollowed, followerId, followingId }) => {
  API.patch("/user/unfollow", {
    followerId: followerId,
    followingId: followingId,
  })
    .then(() => setIsFollowed(false))
    .catch((err) => err);
};

export default unFollowUser;
