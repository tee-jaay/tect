import React from "react";
import _ from "lodash";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import { Box } from "@mui/system";

const OnlineUsers = ({ pending, users }) => {
  const classes = useStyles();

  return (
    <Card raised sx={{ padding: "16px" }}>
      <Typography variant="h6" component="h6" className={classes.title}>
        Online Users
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {pending &&
          _.times(5, (i) => (
            <ListItem key={i}>
              <Box className={classes.userContainer}>
                <div className={classes.avatarLoader}>
                  <Skeleton variant="circular" width={40} height={40} />
                </div>
                <div className={classes.nameEmail}>
                  <Skeleton className={classes.name} />
                  <Skeleton animation="wave" className={classes.email} />
                </div>
              </Box>
            </ListItem>
          ))}
        {!pending &&
          users &&
          users.map((user, i) => (
            <ListItem alignItems="flex-start" key={i}>
              <ListItemAvatar>
                <Avatar
                  alt={user.profile?.name}
                  src={user.profile?.["avatar"]}
                />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.role["type"]}
                    </Typography>
                    {` — ${user.email}`}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
      </List>
    </Card>
  );
};

export default OnlineUsers;
