import {
  Alert,
  FormControl,
  Grid,
  MenuItem,
  Skeleton,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../../store/taskSlice";
import { useState } from "react";

const TaskHeader = ({ handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { task, pending, error } = useSelector((state) => state.task);
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();
  const updateTaskData = () => {
    if (title && title.length > 3) {
      let data = { taskId: task.id, title: title };
      dispatch(updateTask(data));
    }
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const statusArr = [
    "active",
    "cancelled",
    "completed",
    "review",
    "not started",
  ];

  return (
    <>
      <Grid item spacing={6} md={7}>
        <div className={classes.taskTitleContainer}>
          {pending && (
            <div style={{ display: "flex" }}>
              <Skeleton style={{ width: "20%" }} />
              <Skeleton
                animation="wave"
                style={{ marginLeft: "20px", width: "12%" }}
              />
              <Skeleton
                animation={false}
                style={{ marginLeft: "20px", width: "16%" }}
              />
            </div>
          )}
          {!pending && task && (
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(e) => updateTaskData()}
              margin="small"
              size="small"
              label="Title"
              fullWidth
              value={title}
              defaultValue={!pending && task && task.title}
              inputProps={{ "data-cy": "task-title" }}
            />
          )}

          {error && <Alert severity="error">{error}</Alert>}
        </div>
      </Grid>
      <Grid item spacing={6} md={5}>
        <div className={classes.assigneesCloseContainer}>
          <div className={classes.assignees}>
            <FormControl fullWidth sx={{ minWidth: "220px" }}>
              <TextField
                label="Status"
                size="small"
                id="outlined-select-status"
                select
                value={status}
                onChange={handleChangeStatus}
                inputProps={{ "data-cy": "status-select" }}
              >
                {statusArr.map((status) => (
                  <MenuItem key={status} value={status} data-cy={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </div>
          <span className={classes.close} onClick={handleClose}>
            <CancelIcon className={classes.closeIcon} />
          </span>
        </div>
      </Grid>
    </>
  );
};

export default TaskHeader;
