import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Modal,
  TableCell,
  TableRow,
} from "@mui/material";
import _ from "lodash";
import { flagPriority, statusChip } from "../../../../../helpers/DataDisplay";
import TaskDescription from "../description/TaskDescription";
import TaskHeader from "../header/TaskHeader";
import TaskSchedule from "../schedule/TaskSchedule";
import Todos from "../todo/Todos";
import useStyles from "../styles";
import { useDispatch } from "react-redux";
import {
  fetchTasksByProjectId,
  getTaskById,
} from "../../../../../store/taskSlice";
import { getTodosByTasksId } from "../../../../../store/todoSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Skeleton from "@mui/material/Skeleton";
import Chat from "../chat/Chat";

const TaskList = ({ projectId, tasks, error, pending }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = (taskId) => {
    setOpen(true);
    dispatch(getTaskById(taskId));
    dispatch(getTodosByTasksId(taskId));
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchTasksByProjectId(projectId);
  }, [projectId]);

  return (
    <>
      {error && error}
      {pending && (
        <TableRow>
          {_.times(7, (i) => (
            <TableCell key={i}>
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableRow>
      )}
      {tasks &&
        tasks.map((task, index) => (
          <React.Fragment key={task.id}>
            <TableRow className={classes.projectDetailTaskItem}>
              <TableCell
                component="th"
                scope="row"
                style={{ textAlign: "center" }}
              >
                {index + 1}
              </TableCell>
              <TableCell data-cy="task-list-title">{task.title}</TableCell>
              <TableCell style={{ textAlign: "right" }}>
                {statusChip("task", task.status, "detault")}
              </TableCell>
              <TableCell style={{ textAlign: "right" }}>
                {task.plannedStart}
              </TableCell>
              <TableCell style={{ textAlign: "right" }}>
                {task.plannedEnd}
              </TableCell>
              <TableCell style={{ textAlign: "right" }}>
                {flagPriority(task.priority.toLowerCase())}
              </TableCell>
              <TableCell style={{ textAlign: "right" }}>
                <Button
                  color="info"
                  variant="outlined"
                  startIcon={<VisibilityIcon />}
                  type="submit"
                  onClick={() => handleOpen(task.id)}
                  size="small"
                  data-cy={`task-index-` + index}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>

            <Modal
              className={classes.modal}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              hideBackdrop={true}
            >
              <div className={classes.paper}>
                <Grid container className={classes.projectTaskHeader}>
                  <TaskHeader title={task.title} handleClose={handleClose} />
                </Grid>
                <Divider variant="fullWidth" className={classes.divider} />
                <div className={classes.projectTaskContent}>
                  <Grid container>
                    <Grid item sm={12} md={7}>
                      <TaskSchedule />
                      <TaskDescription />
                      <Todos />
                    </Grid>
                    <Grid item sm={12} md={5}>
                      <Chat />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Modal>
          </React.Fragment>
        ))}
    </>
  );
};

export default TaskList;
