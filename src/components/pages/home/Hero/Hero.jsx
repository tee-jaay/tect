import { CircularProgress, Link } from "@mui/material";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import useStyles from "../styles";

const Hero = ({ logo, pending, error }) => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Link href="/#/dashboard">
        {error && <ErrorAlert message={error} />}
        {pending && <CircularProgress />}
        {!error && !pending && (
          <img src={logo} alt="app" style={{ maxHeight: "100%" }} />
        )}
      </Link>
    </div>
  );
};

export default Hero;
