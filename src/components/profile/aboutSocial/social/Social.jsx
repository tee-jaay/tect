import { Card, Typography } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import useStyles from "../../styles";

const Social = ({ user, pending }) => {
  const classes = useStyles();
  return (
    <Card className={classes.socialContainer} raised>
      <Typography variant="h6" gutterBottom>
        Socials
      </Typography>
      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <FacebookIcon
            className={classes.contactIcon + " " + classes.facebook}
          />
          <a
            href={!pending && user?.profile?.facebook}
            target="_blank"
            rel="noreferrer"
          >
            {!pending && user?.profile?.facebook}
          </a>
        </div>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <PinterestIcon
            className={classes.contactIcon + " " + classes.pinterest}
          />
          <a
            href={!pending && user?.profile?.pinterest}
            target="_blank"
            rel="noreferrer"
          >
            {!pending && user?.profile?.pinterest}
          </a>
        </div>
      </div>

      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <LinkedInIcon
            className={classes.contactIcon + " " + classes.linkedin}
          />
          <a
            href={!pending && user?.profile?.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {!pending && user?.profile?.linkedin}
          </a>
        </div>
      </div>

      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <GitHubIcon className={classes.contactIcon + " " + classes.github} />
          <a
            href={!pending && user?.profile?.github}
            target="_blank"
            rel="noreferrer"
          >
            {!pending && user?.profile?.github}
          </a>
        </div>
      </div>

      <div className={classes.contactContainer}>
        <div className={classes.contactIconName}>
          <TwitterIcon
            className={classes.contactIcon + " " + classes.twitter}
          />
          <a
            href={!pending && user?.profile?.twitter}
            target="_blank"
            rel="noreferrer"
          >
            {!pending && user?.profile?.twitter}
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Social;
