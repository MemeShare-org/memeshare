import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import deletePost from "../../actions/posts/deletePost";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import LinkIcon from "@material-ui/icons/Link";

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

const PostDetails = ({ IsUserPost, userId, PostId }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <KeyboardArrowDownIcon
        style={{ color: "white" }}
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
      />
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <StyledMenuItem>
          <ListItemIcon>
            <EditIcon style={{ color: "white" }} fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Edit' />
        </StyledMenuItem>
        {IsUserPost ? (
          <StyledMenuItem
            onClick={() => {
              var postId = PostId;
              deletePost({ userId, postId });
            }}>
            <ListItemIcon>
              <DeleteIcon style={{ color: "white" }} fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Delete' />
          </StyledMenuItem>
        ) : null}
        <CopyToClipboard
          text={`${window.location.hostname}/p/${PostId}`}
          onCopy={() => toast.success("Copied Successfully!")}>
          <StyledMenuItem>
            <ListItemIcon>
              <LinkIcon style={{ color: "white" }} fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Copy link' />
          </StyledMenuItem>
        </CopyToClipboard>
      </StyledMenu>
    </div>
  );
};

export default PostDetails;
