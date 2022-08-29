import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notification = () => {
  return (
    <>
      <IconButton disabled aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>

      <IconButton
        disabled
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="info">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default Notification;
