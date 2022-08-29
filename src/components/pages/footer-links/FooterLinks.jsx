import { Divider, Grid, Link, Paper } from "@mui/material";
import { Box } from "@mui/system";

const FooterLinks = () => {
  const links = [
    {
      name: "Terms",
      link: "terms-of-service",
    },
    {
      name: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      name: "GDPR",
      link: "gdpr",
    },
    {
      name: "Disclaimer",
      link: "disclaimer",
    },
  ];
  return (
    <Grid container component={Paper}>
      <Grid item md={12}>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingY: "24px",
          }}
        >
          {links.map((item, index) => (
            <Link href={`/#/${item.link}`} key={index}>
              {item.name}
            </Link>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default FooterLinks;
