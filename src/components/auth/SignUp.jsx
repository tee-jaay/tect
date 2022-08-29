import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import useStyles from "./styles.js";
import axios from "axios";
import { Card } from "@mui/material";
import { getAuthPages } from "../../store/authPageSlice";

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { authPage } = useSelector((state) => state.authPage);
  const bgImageUrl = authPage && authPage?.[0][1].imgUrl;

  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) {
    history.push("/dashboard");
  }

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_HOST}/auth/register`, { username, email, password })
      .then((res) => {
        history.push("/auth/sign-in");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    dispatch(getAuthPages());
  }, [dispatch]);

  return (
    <Box
      className={classes.root}
      sx={{
        backgroundImage: `url(${bgImageUrl})`,
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CssBaseline />
        <Card className={classes.paper} raised sx={{ padding: "32px 24px" }}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={handleSubmit}
            className={classes.formSignUp}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  size="small"
                  inputProps={{ "data-cy": "username" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                  inputProps={{ "data-cy": "email" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  size="small"
                  inputProps={{ "data-cy": "password" }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      inputProps={{ "data-cy": "tos-check" }}
                    />
                  }
                  label="I agreed to the Terms of Service."
                />
              </Grid>
            </Grid>
            {loading ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled
                sx={{ marginY: "8px" }}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                sx={{ marginY: "8px" }}
                data-cy="signUpBtn"
              >
                Sign Up
              </Button>
            )}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/#/auth/sign-in"
                  variant="body2"
                  sx={{ color: "#606060" }}
                  data-cy="sign-in-link"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
