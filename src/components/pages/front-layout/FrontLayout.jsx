import { Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import FooterLinks from "../footer-links/FooterLinks";
import Copyright from "../home/Copyright/Copyright";

const FrontLayout = ({ children }) => {
  return (
    <>
      <Container sx={{ paddingY: "16px" }}>
        <Link to="/" sx={{ color: "#000" }}>
          Home
        </Link>
      </Container>
      <Container component={Paper} sx={{ padding: "24px" }}>
        {children}
      </Container>
      <br />
      <FooterLinks />
      <Copyright />
    </>
  );
};

export default FrontLayout;
