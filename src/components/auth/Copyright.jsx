import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        data-cy="footer-copyright"
      >
        {"Copyright © "}
        <Link color="inherit" href="http://localhost:3000">
          TeeJaay Dev
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};

export default Copyright;
