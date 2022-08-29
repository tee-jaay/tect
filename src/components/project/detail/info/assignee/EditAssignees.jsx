import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  Card,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../../../common/loader/ContentLoader";
import ErrorAlert from "../../../../common/alert/ErrorAlert";
import { addProjectAssignees } from "../../../../../store/projectSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const EditAssignees = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { users, pending, error } = useSelector((state) => state.user);

  const { project } = useSelector((state) => state.project);

  const alreadyAssignedArr = [];

  project?.["assignees"].forEach((item) => {
    alreadyAssignedArr.push(item.userId);
  });

  let assignees = [];

  const handleClose = () => {
    setOpen(false);
    if (assignees.length > 0) {
      let data = {
        projectId: project.id,
        assignees: assignees,
      };
      dispatch(addProjectAssignees(data));
    }
  };

  const handleCheck = (e) => {
    let assignee = {
      userId:
        e.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
          "data-userId"
        ),
      userEmail:
        e.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
          "data-userEmail"
        ),
      userName:
        e.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
          "data-username"
        ),
      userAvatar:
        e.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
          "data-avatar"
        ),
    };
    assignees.push(assignee);
    assignees = assignees.filter(function (value, index, array) {
      return array.indexOf(value) === index;
    });
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Employees
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={handleClose}
            data-cy="assignee-save-btn"
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <Container fullScreen sx={{ pt: 4 }}>
        {error && <ErrorAlert />}
        {pending && <ContentLoader />}
        <Grid container spacing={4}>
          {!pending &&
            users &&
            users.map((user, index) => (
              <Grid item md={6} sm={12} key={index}>
                <Grid container component={Card} sx={{ padding: 4 }} raised>
                  <Grid item md={8}>
                    <div>
                      <FormGroup
                        data-userId={user?.id}
                        data-userEmail={user?.email}
                        data-username={user?.username}
                        data-avatar={user?.profile?.avatar}
                        data-cy={`assignee-index-${index}`}
                      >
                        {alreadyAssignedArr.includes(user?.id) ? (
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Assigned"
                            onChange={handleCheck}
                          />
                        ) : (
                          <FormControlLabel
                            control={<Switch />}
                            label="Assigned"
                            onChange={handleCheck}
                          />
                        )}
                      </FormGroup>
                    </div>
                    <Typography>{user?.name}</Typography>
                    <Typography>Bio: {user?.profile?.bio}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <img src={`${user?.profile?.avatar}?q=${index}`} alt={user?.name} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Dialog>
  );
};

export default EditAssignees;
