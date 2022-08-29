import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { drawerMenuItemIcon } from "../../../../../helpers/DataDisplay";
import useStyles from "./styles";

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
    name: "Settings",
    link: "/settings",
  },
];

const LeftMenu = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <List sx={{ display: "flex" }} className={classes.root}>
        {menuOptions.map((item, index) => (
          <ListItem
            className={classes.menuItem}
            button
            key={index}
            component={Link}
            to={item.link}
            selected={
              window.location.href.indexOf(item.name.toLocaleLowerCase()) > -1
                ? true
                : false
            }
            data-cy={item.name}
          >
            <ListItemIcon>
              {drawerMenuItemIcon(item.name.toLowerCase())}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default LeftMenu;
