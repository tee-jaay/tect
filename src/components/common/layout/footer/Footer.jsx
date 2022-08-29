import { Typography } from "@mui/material";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography
        variant="subtitle2"
        compoent="subtitle2"
        className={classes.copyright}
        data-cy="footer-copyright"
      >
        Copyright &copy; {new Date().getFullYear()} Tam Jid
      </Typography>
    </div>
  );
};

export default Footer;
