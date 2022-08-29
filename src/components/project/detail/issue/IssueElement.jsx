import { Typography } from "@mui/material";
import useStyles from "./styles";

const IssueElement = ({ title, value }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="body1"
        component="body1"
        className={classes.heading}
        data-cy="issue-toggle"
      >
        {title}:
      </Typography>
      <Typography variant="body2" component="span" data-cy="issue-about-value">
        {" "}
        {value} <br />
      </Typography>
    </>
  );
};

export default IssueElement;
