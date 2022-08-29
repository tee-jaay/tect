import { AlertTitle, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ErrorAlert = ({ message }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
        <Typography>Please contact the web developer.</Typography>
      </div>
    </>
  );
};

export default ErrorAlert;
