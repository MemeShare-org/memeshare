import API from "../../api/api";
import { toast } from "react-toastify";

const signin = ({ setIsLoading, values, resetForm }) => {
  API.post(`/user/signin`, values)
    .then((res) => {
      if (res.data.message === "Auth successful") {
        resetForm();
        localStorage.setItem("token", res.data.token);
        window.location.href = "/home";
      }
    })
    .catch((err) => {
      if (err.response.data.message === "Account is not verified!") {
        toast.error("Your account is not verified!");
        setIsLoading(false);
      } else {
        toast.error("The account username or password is incorrect.");
        setIsLoading(false);
      }
    });
};

export default signin;
