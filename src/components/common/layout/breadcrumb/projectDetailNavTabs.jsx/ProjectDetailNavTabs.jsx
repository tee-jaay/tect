import { Link } from "react-router-dom";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BugReportIcon from "@mui/icons-material/BugReport";
import TimerIcon from "@mui/icons-material/Timer";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import useStyles from "./styles";
import React from "react";

const ProjectDetailNavTabs = ({ pending, projectId }) => {
  const classes = useStyles();

  let menuItemsArr = ["Info", "Tasks", "Issues", "Timesheets", "Meetings"];

  const menuItems = (itemName) => {
    let itemIcon = "";
    switch (itemName) {
      case "Info":
        itemIcon = <InfoIcon fontSize="small" />;
        break;
      case "Tasks":
        itemIcon = <FormatListBulletedIcon fontSize="small" />;
        break;
      case "Issues":
        itemIcon = <BugReportIcon fontSize="small" />;
        break;
      case "Timesheets":
        itemIcon = <TimerIcon fontSize="small" />;
        break;
      case "Meetings":
        itemIcon = <PeopleOutlineIcon fontSize="small" />;
        break;
      default:
        itemIcon = "";
    }
    return (
      <MenuItem
        selected={
          window.location.href.search(itemName.toLowerCase()) > -1
            ? true
            : false
        }
        dense={true}
        className={classes.navItem}
        component={Link}
        to={`/projects/${projectId}/${itemName.toLowerCase()}`}
        data-cy={itemName.toLowerCase()}
      >
        <ListItemIcon>{itemIcon}</ListItemIcon>
        <ListItemText>{itemName}</ListItemText>
      </MenuItem>
    );
  };

  return (
    <>
      {pending && <div></div>}
      {!pending && projectId && (
        <MenuList className={classes.root}>
          {menuItemsArr.map((item, i) => (
            <span key={i}>{menuItems(item)}</span>
          ))}
        </MenuList>
      )}
    </>
  );
};

export default ProjectDetailNavTabs;
