import {
  Button,
  FormControl,
  MenuItem,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import useStyles from "../styles";
import { createTask } from "../../../../../store/taskSlice";

const TaskAdd = ({ projectId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("active");
  const [priority, setPriority] = useState("Medium");
  const [title, setTitle] = useState("");
  const [plannedStart, setPlannedStartDate] = useState("");
  const [plannedEnd, setPlannedEndDate] = useState("");

  const { pending, error } = useSelector((state) => state.task);
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    let createdBy = currentUser.username;
    let addTaskData = {
      title,
      status,
      plannedStart,
      plannedEnd,
      priority,
      projectId,
      createdBy,
    };
    dispatch(createTask(addTaskData));
    // reset fields
    setTitle("");
    setStatus("not started");
  };

  const statusArr = [
    "active",
    "cancelled",
    "completed",
    "review",
    "not started",
  ];

  const priorityArr = ["Low", "Medium", "High", "Critical"];

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <>
      {error && error}

      <TableRow>
        <TableCell style={{ textAlign: "center" }}>New</TableCell>
        <TableCell>
          {pending ? (
            <TextField disabled placeholder="Title" size="small" />
          ) : (
            <TextField
              placeholder="Title"
              size="small"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              inputProps={{ "data-cy": "title" }}
            />
          )}
        </TableCell>
        <TableCell style={{ textAlign: "right" }}>
          <FormControl fullWidth>
            <TextField
              size="small"
              id="outlined-select-status"
              select
              value={status}
              onChange={handleChangeStatus}
              required
              inputProps={{ "data-cy": "status-select" }}
            >
              {statusArr.map((status) => (
                <MenuItem key={status} value={status} data-cy={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </TableCell>
        <TableCell style={{ textAlign: "right" }}>
          <TextField
            onChange={(e) => setPlannedStartDate(e.target.value)}
            variant="outlined"
            size="small"
            id="date"
            type="date"
            defaultValue="2021-11-14"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ "data-cy": "start-date" }}
          />
        </TableCell>
        <TableCell style={{ textAlign: "right" }}>
          <TextField
            onChange={(e) => setPlannedEndDate(e.target.value)}
            variant="outlined"
            size="small"
            id="date"
            type="date"
            defaultValue="2021-11-14"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ "data-cy": "end-date" }}
          />
        </TableCell>
        <TableCell style={{ textAlign: "right" }}>
          <FormControl fullWidth>
            <TextField
              size="small"
              id="outlined-select-priority"
              select
              value={priority}
              onChange={handleChangePriority}
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
        </TableCell>
        <TableCell component="th" scope="row" style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            startIcon={<AddBoxIcon />}
            type="submit"
            onClick={handleSubmit}
            size="small"
            data-cy="save-btn"
          >
            Save
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TaskAdd;
