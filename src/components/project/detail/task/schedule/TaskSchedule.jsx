import { CircularProgress, Grid } from "@mui/material";
import TaskPriority from "../priority/TaskPriority";
import TaskDate from "./TaskDate";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const TaskSchedule = () => {
  const classes = useStyles();

  const {
    task,
    pending,
    // error
  } = useSelector((state) => state.task);

  return (
    <>
      <div className={classes.root}>
        {pending ? (
          <div className={classes.circularProgressContainer}>
            <CircularProgress size={32} />
          </div>
        ) : (
          <Grid container spacing={6}>
            <Grid item sm={4}>
              <TaskDate
                taskId={task.id}
                dateTitle={"Planned Start"}
                dateValue={task.plannedStart}
                dateFor="plannedStart"
              />
              <TaskDate
                taskId={task.id}
                dateTitle={"Planned End"}
                dateValue={task.plannedEnd}
                dateFor="plannedEnd"
              />
            </Grid>
            <Grid item sm={4}>
              <TaskDate
                taskId={task.id}
                dateTitle={"Actual Start"}
                dateValue={task.actualStart}
                dateFor="actualStart"
              />
              <TaskDate
                taskId={task.id}
                dateTitle={"Actual End"}
                dateValue={task.actualEnd}
                dateFor="actualEnd"
              />
            </Grid>

            <Grid item sm={4}>
              <TaskPriority />
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
};

export default TaskSchedule;
