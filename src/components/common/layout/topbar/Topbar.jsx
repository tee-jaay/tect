import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";
import RightSection from "./rightSection/RightSection";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MainLoader from "../../loader/MainLoader";
import LeftMenu from "./leftSection/LeftMenu";
import useStyles from "../styles";

const drawerWidth = 188;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser === null) {
    history.push("/auth/sign-in");
  }

  const { pending: projectPending } = useSelector((state) => state.project);
  const { pending: userPending } = useSelector((state) => state.user);
  const { pending: profilePending } = useSelector((state) => state.profile);
  const { pending: dashboardPending } = useSelector((state) => state.dashboard);

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <div className={classes.topbarContainer}>
          <LeftMenu />
          <RightSection />
        </div>
      </Toolbar>
      {(dashboardPending ||
        projectPending ||
        userPending ||
        profilePending) && <MainLoader />}
    </AppBar>
  );
};

export default Topbar;
