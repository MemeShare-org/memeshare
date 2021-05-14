const signout = ({ setAnchorEl, toast }) => {
  window.localStorage.setItem("token", "");
  toast.success("Sign out Successful!");
  setAnchorEl(null);
  setTimeout(() => {
    window.location.href = "/";
  }, 1500);
};

export default signout;
