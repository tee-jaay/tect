import { Typography } from "@mui/material";
import useStyles from "./styles";

const SubSectionTitle = ({ content }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle2" className={classes.title}>
        {content}
      </Typography>
    </>
  );
};

export default SubSectionTitle;
