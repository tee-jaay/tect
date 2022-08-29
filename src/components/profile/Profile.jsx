import { useEffect } from "react";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AboutSocial from "./aboutSocial/AboutSocial";
import Discussion from "./discussion/Discussion";
import useStyles from "./styles";
import { getProfileByUserId } from "../../store/profileSlice";
import TopBreadCrumb from "../common/layout/breadcrumb/TopBreadCrumb";
import ErrorAlert from "../common/alert/ErrorAlert";
import { getWallPostsByUserId } from "../../store/wallPostSlice";

const Profile = ({ page, pageTitle }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { currentUser, pending, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfileByUserId(currentUser.id));
    dispatch(getWallPostsByUserId(currentUser.id));
  }, [dispatch, currentUser.id]);
  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {error && <ErrorAlert message={error} />}
          <Paper className={classes.header}>
            <div className={classes.root}>
              {!pending && currentUser && (
                <>
                  <Avatar
                    src={currentUser?.profile?.avatar}
                    alt={currentUser?.name}
                    variant="rounded"
                    className={classes.avatar}
                  />
                  <Typography
                    variant="h5"
                    component="h5"
                    className={classes.headerName}
                  >
                    {currentUser.username}
                  </Typography>
                </>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <AboutSocial user={currentUser} pending={pending} />
        <Discussion user={currentUser} pending={pending} />
      </Grid>
    </Container>
  );
};

export default Profile;
