import { CircularProgress } from "@mui/material";
import useStyles from "./styles";

const PageLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <CircularProgress />
    </div>
  );
};

export default PageLoader;
