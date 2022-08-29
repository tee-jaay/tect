import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../store/userSlice";
import { useHistory } from "react-router";
import { Card } from "@mui/material";
import { getAuthPages } from "../../store/authPageSlice";

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const { currentUser, pending, error } = useSelector((state) => state.user);
  const { authPage } = useSelector((state) => state.authPage);
  const bgImageUrl = authPage && authPage?.[0][1].imgUrl;

  if (currentUser) {
    history.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignIn({ email, password }));
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
        <Box>
          <Card className={classes.paper} raised sx={{ padding: "32px 24px" }}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.formSignIn}
              noValidate
            >
              {pending ? (
                <>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                    disabled={true}
                  />
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    size="small"
                    disabled={true}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={true}
                    sx={{ marginY: "8px" }}
                  >
                    Sign In
                  </Button>
                </>
              ) : (
                <>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                    inputProps={{ "data-cy": "email" }}
                  />

                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    margin="normal"
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
                  {!pending && error && (
                    <Alert severity="error">
                      Email &/or Password did not match!
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    sx={{ marginY: "8px" }}
                    data-cy="signInBtn"
                  >
                    Sign In
                  </Button>
                </>
              )}
              <Grid container>
                <Grid item xs>
                  <Link
                    href="/#/auth/password-reset-request"
                    variant="body2"
                    sx={{ color: "#606060" }}
                    data-cy="forgot-password-link"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/#/auth/sign-up"
                    variant="body2"
                    sx={{ color: "#606060" }}
                    data-cy="sign-up-link"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Box>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};
export default SignIn;
