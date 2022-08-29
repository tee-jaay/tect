import { FormHelperText } from "@mui/material";
import useStyles from "../styles";

const FormErrorMessage = ({ error, show }) => {
  const classes = useStyles();

  if (!error || !show) return null;

  return (
    <FormHelperText className={classes.errorContainer}>{error}</FormHelperText>
  );
};

export default FormErrorMessage;
