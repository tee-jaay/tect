import { Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useMoralis } from "react-moralis";
import TopBreadCrumb from "../common/layout/breadcrumb/TopBreadCrumb";
import JobContract from "./job-contract/JobContract";
import Payments from "./payment/Payments";

const Detail = ({ page, pageTitle }) => {
  const { userId } = useParams();
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();
  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} userId={userId} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Box component={Card} sx={{ padding: "24px" }}>
            <Typography component="h6" variant="h6" gutterBottom>
              User Details
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Username</b> : {userId}
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Type</b> : admin
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>About</b> : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officia ex dolorum doloribus ratione sequi, quo quaerat sed
              incidunt vel! Tempore eaque magni doloremque temporibus nostrum a
              hic nihil vero unde.
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Job Title</b> : Chief Data Engineer
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Phone</b> : 1233334444555
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Email</b> : demarco27@example.com
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Address</b> : 2043 Veronica Prairie
            </Typography>
            <Typography gutterBottom component="h6" variant="body2">
              <b>Country</b> : Svalbard & Jan Mayen Islands
            </Typography>
          </Box>
          <Divider sx={{ height: "16px" }} />
          <Box component={Card} sx={{ padding: "24px" }}>
            <Typography component="h6" variant="h6" gutterBottom>
              Socials
            </Typography>

            <Typography component="p" variant="p">
              Facebook <a href="/">www.example.com</a>
            </Typography>
            <Typography component="p" variant="p">
              Twitter <a href="/">www.example.com</a>
            </Typography>
            <Typography component="p" variant="p">
              Linkedin <a href="/">www.example.com</a>
            </Typography>
            <Typography component="p" variant="p">
              Github <a href="/">www.example.com</a>
            </Typography>
            <Typography component="p" variant="p">
              Pinterest <a href="/">www.example.com</a>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box component={Card} sx={{ padding: "24px", mb: 2 }}>
            <JobContract />
          </Box>
          <Box component={Card} sx={{ padding: "24px", mb: 2 }}>
            <Payments
              isAuthenticated={isAuthenticated}
              authenticate={authenticate}
              user={user}
              logout={logout}
              isLoggingOut={isLoggingOut}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;
