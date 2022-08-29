import { Skeleton, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import ErrorAlert from "../../../common/alert/ErrorAlert";

import useStyles from "../styles";

const About = ({ about, pending, error }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <Typography variant="h6" component="h6" className={classes.about}>
        {error && <ErrorAlert message={error} />}
        {pending && (
          <>
            <Skeleton />
            <Skeleton animation="animation" />
            <Skeleton animation="false" />
            <Skeleton animation="wave" />
          </>
        )}
        {!error && !pending && about && about.substring(0, 260)}
      </Typography>
    </div>
  );
};

export default About;
