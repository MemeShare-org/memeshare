import API from "../api/api";

const getUser = ({ id, setProfile }) => {
  API.get(`/user/${id}`)
    .then((res) => {
      setProfile(res.data);
    })
    .catch(err => err);
};

export default getUser;
