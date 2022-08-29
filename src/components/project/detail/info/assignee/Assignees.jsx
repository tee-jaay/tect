import { Avatar, AvatarGroup, Button, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SubSectionTitle from "../inc/SubSectionTitle";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../../../store/userSlice";
import ErrorAlert from "../../../../common/alert/ErrorAlert";
import EditAssignees from "./EditAssignees";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

let allAssignees = [];

const Assignees = ({ pending, error }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { project } = useSelector((state) => state.project);
  const [showEditBtn, setShowEditBtn] = useState(false);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (!pending && !error && project) {
    allAssignees = project.assignees.filter(function (value, index, array) {
      return array.indexOf(value) === index;
    });
  }

  return (
    <div
      onMouseEnter={(e) => setShowEditBtn(true)}
      onMouseLeave={(e) => setShowEditBtn(false)}
      data-cy="assignees-container"
    >
      <div className={classes.assigneesContainer}>
        {error && <ErrorAlert message={error} />}
        <div>
          <Stack direction="row">
            <SubSectionTitle content={"Assignees:"} />
            {pending && (
              <>
                <Skeleton variant="circular" height={42} width={42} />
                <Skeleton variant="circular" height={42} width={42} />
                <Skeleton variant="circular" height={42} width={42} />
              </>
            )}
            <AvatarGroup max={6}>
              {!pending &&
                project &&
                allAssignees.map((assignee, index) => (
                  <Tooltip
                    key={assignee?.userId}
                    title={assignee?.userName}
                    placement="top"
                    component={Link}
                    to={`/users/${assignee?.userId}`}
                    target="_blank"
                  >
                    <Avatar
                      alt={assignee?.userName}
                      src={`${assignee?.userAvatar}?q=${index}`}
                    />
                  </Tooltip>
                ))}
            </AvatarGroup>
          </Stack>
        </div>
        <div className={classes.editAssignee}>
          <div></div>
          {showEditBtn && (
            <Button
              onClick={handleClickOpen}
              size="small"
              variant="outlined"
              startIcon={<GroupAddTwoToneIcon />}
              className={classes.showBtn}
              data-cy="assignee-edit"
            >
              Edit
            </Button>
          )}

          <EditAssignees open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Assignees;
