import API from "../api/api";

const getUser = ({ id, setUser }) => {
  API.get(`/user/${id}`)
    .then((res) => {
      setUser(res.data);
    })
    .catch(err => err);
};

export default getUser;
