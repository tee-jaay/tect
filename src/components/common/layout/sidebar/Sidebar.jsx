import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { drawerMenuItemIcon } from "../../../../helpers/DataDisplay";
import SettingsApplicationsTwoToneIcon from "@mui/icons-material/SettingsApplicationsTwoTone";

import useStyles from "../styles";
import { getHomePage } from "../../../../store/homePageSlice";
import { useEffect } from "react";

const drawerWidth = 188;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  height: "47px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ open, handleDrawerClose }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const { homePage } = useSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(getHomePage());
  }, [dispatch]);

  const menuOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Users",
      link: "/users",
    },
    {
      name: "Mailbox",
      link: "/mailbox",
    },
  ];

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Link to="/" target="_">
            <img
              className={classes.logo}
              src={homePage?.[0]?.logo}
              alt="logo"
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuOptions.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.link}
              selected={
                window.location.href.indexOf(item.name.toLocaleLowerCase()) > -1
                  ? true
                  : false
              }
            >
              <ListItemIcon>
                {drawerMenuItemIcon(item.name.toLowerCase())}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key={"settings"} component={Link} to={"/settings"}>
            <ListItemIcon>
              <SettingsApplicationsTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default Sidebar;
