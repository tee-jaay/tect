import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TuneIcon from "@mui/icons-material/Tune";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { makeStyles } from "@mui/styles";
import { userSignOut } from "../../../../../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: "20px",
    cursor: "pointer",
  },
  icon: {
    paddingRight: "5px",
  },
}));

const ProfileMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    try {
      localStorage.removeItem("persist:root");
      localStorage.removeItem("auth_token");
      dispatch(userSignOut);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    history.push("/auth/sign-in");
  };

  const goToProfile = () => {
    history.push("/profile");
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        title={currentUser && currentUser.profile?.name}
        alt={currentUser && currentUser.profile?.name}
        // src={avatarSrc && avatarSrc}
        src={currentUser && currentUser.profile?.avatar}
        className={classes.small}
        onClick={handleClick}
        data-cy="right-user-menu"
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={goToProfile} data-cy="profile-link">
          <AccountBoxIcon
            fontSize="small"
            color="primary"
            className={classes.icon}
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TuneIcon fontSize="small" color="action" className={classes.icon} />
          My account
        </MenuItem>
        <MenuItem onClick={handleSignOut} data-cy="logout-link">
          <ExitToAppIcon
            fontSize="small"
            color="error"
            className={classes.icon}
          />
          Sign out
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
