import API from "../../api/api";

const changeStatus = ({ id, status }) => {
  API.patch(`user/${id}`, [{ "propName": "status", "value": status }])
    .then((res) => {
      console.log("status changed!");
    })
    .catch((err) => err);
};

export default changeStatus;
