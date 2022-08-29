import { Card, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import TitleIcon from "@mui/icons-material/Title";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PublicIcon from "@mui/icons-material/Public";
import useStyles from "../../styles";

const About = ({ user, pending }) => {
  const classes = useStyles();

  return (
    <Card className={classes.aboutContainer} raised>
      <Typography variant="h6" gutterBottom>
        About
      </Typography>
      <Typography gutterBottom>{!pending && user?.profile?.bio}</Typography>
      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <RoomIcon className={classes.contactIcon} />
          <Typography variant="body2">Address:</Typography>
        </div>
        <div className={classes.contactValue}>
          {!pending && user?.profile?.address}
        </div>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <PublicIcon className={classes.contactIcon} />
          <Typography variant="body2">Country:</Typography>
        </div>
        <div className={classes.contactValue}>
          {!pending && user?.profile?.country}
        </div>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <TitleIcon className={classes.contactIcon} />
          <Typography variant="body2">Title:</Typography>
        </div>
        <div className={classes.contactValue}>
          {!pending && user?.profile?.title}
        </div>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <SmartphoneIcon className={classes.contactIcon} />
          <Typography variant="body2">Phone:</Typography>
        </div>
        <div className={classes.contactValue}>
          {!pending && user?.profile?.phone}
        </div>
      </div>
    </Card>
  );
};

export default About;
