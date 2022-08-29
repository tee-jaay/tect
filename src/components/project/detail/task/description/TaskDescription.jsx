import { Alert, Grid, Skeleton, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../../../../store/taskSlice";
import useStyles from "./styles";

const TaskDescription = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { task, pending, error } = useSelector((state) => state.task);

  const [taskDescription, setTaskDescription] = useState();

  const updateTaskData = () => {
    if (taskDescription && taskDescription.length > 3) {
      let data = { taskId: task.id, description: taskDescription };
      dispatch(updateTask(data));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.root}>
            {error && <Alert severity="error">{error}</Alert>}
            {pending ? (
              <>
                <Skeleton style={{ marginLeft: "20px", width: "76%" }} />
                <Skeleton
                  animation="wave"
                  style={{ marginLeft: "20px", width: "52%" }}
                />
                <Skeleton
                  animation={false}
                  style={{ marginLeft: "20px", width: "64%" }}
                />
              </>
            ) : (
              <TextField
                className={classes.subTitle}
                onChange={(e) => setTaskDescription(e.target.value)}
                defaultValue={task.description}
                value={taskDescription}
                rows="2"
                multiline
                fullWidth
                margin="normal"
                size="small"
                variant="outlined"
                label="Description"
                onBlur={(e) => updateTaskData()}
                inputProps={{ "data-cy": "task-description" }}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskDescription;
