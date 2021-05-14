import React, { useState } from "react";
import { toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";
import signout from "../../actions/auth/signout";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #0b0e11",
    backgroundColor: "#242c37",
    color: "white",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    "&:focus": {
      backgroundColor: "#242c37",
      "&.MuiListItemText-primary": {
        color: "white",
      },
    },
  },
}))(MenuItem);

const TopbarAccount = ({ user, setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <div>
          <StyledMenuItem
            onClick={() =>
              (window.location.href = `/profile/${user.username}`)
            }>
            <ListItemIcon>
              <SupervisorAccountIcon
                style={{ color: "white" }}
                fontSize='small'
              />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </StyledMenuItem>
          <StyledMenuItem onClick={() => signout({ setAnchorEl, toast })}>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: "white" }} fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Sign out' />
          </StyledMenuItem>
        </div>
      </StyledMenu>
    </div>
  );
};

export default TopbarAccount;
