import API from "../../api/api";
import { toast } from "react-toastify";

const signup = ({ setIsLoading, values, resetForm }) => {
  API.post(`/user/signup`, values)
    .then((res) => {
      resetForm();
      toast.success("Account created! Go check your email.");
      setTimeout(() => {
        window.location.href = `/signin`;
      }, 1500);
    })
    .catch(() => {
      toast.error("Account already exist!");
      setIsLoading(false);
    });
};

export default signup;
