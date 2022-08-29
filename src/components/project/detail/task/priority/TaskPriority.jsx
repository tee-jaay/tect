import { useState } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  FormControl,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { updateTask } from "../../../../../store/taskSlice";

const TaskPriority = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { task, pending, error } = useSelector((state) => state.task);
  const [priority, setPriority] = useState(!pending && task.priority);
  const priorityArr = ["Low", "Medium", "High", "Critical"];

  const updatePriority = () => {
    let data = { taskId: task.id, priority: priority };
    dispatch(updateTask(data));
  };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className={classes.root}>
      {error && <Alert severity="error">Error {error}</Alert>}

      {!pending && task.priority && (
        <FormControl fullWidth>
          <TextField
            value={priority}
            onChange={handleChangePriority}
            onBlur={updatePriority}
            label="Priority"
            size="small"
            id="outlined-select-priority"
            select
            required
            inputProps={{ "data-cy": "priority-select" }}
          >
            {priorityArr.map((priority) => (
              <MenuItem key={priority} value={priority} data-cy={priority}>
                {priority}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      )}

      <div className={classes.creator}>
        <Typography
          variant="subtitle2"
          className={classes.subTitle}
          gutterBottom
        >
          Creator:
          <Link
            sx={{ marginLeft: "8px" }}
            href={`/users/${task.createdBy}`}
            variant="body2"
          >
            {task && task.createdBy}
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default TaskPriority;
