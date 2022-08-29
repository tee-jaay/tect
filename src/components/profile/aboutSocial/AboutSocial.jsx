import { Grid } from "@mui/material";
import About from "./about/About";
import Social from "./social/Social";

const AboutSocial = ({ user, pending }) => {
  return (
    <>
      <Grid item xs={12} sm={4} md={4}>
        <About user={user} pending={pending} />
        <Social user={user} pending={pending} />
      </Grid>
    </>
  );
};

export default AboutSocial;
