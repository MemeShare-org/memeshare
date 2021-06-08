import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#242c37",
    zIndex: 1,
    position: "fixed",
    bottom: "0px",
    width: "100%",
  },
  icon: {
    color: "yellow",
  },
});

const BottomBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      className={`root ${classes.root}`}
      showLabels>
      <BottomNavigationAction
        className={classes.icon}
        component='div'
        label='Home'
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component='div'
        label='Discover'
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        component='div'
        label='Profile'
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomBar;
