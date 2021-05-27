import API from "../../api/api";

const getUser = ({ id, setProfile, setLoading }) => {
  API.get(`/user/${id}`)
    .then((res) => {
      setProfile(res.data);
      setLoading(false);
    })
    .catch((err) => err);
};

export default getUser;
