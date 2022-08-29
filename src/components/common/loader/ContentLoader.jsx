import { CircularProgress } from "@mui/material";
import useStyles from "./styles";

const ContentLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default ContentLoader;
