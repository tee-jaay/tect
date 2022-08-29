import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../../store/taskSlice";
import useStyles from "./styles";

const TaskDate = ({ taskId, dateTitle, dateValue, dateFor }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const updateDate = () => {
    let data = {};
    switch (dateFor) {
      case "plannedStart":
        data = {
          taskId: taskId,
          plannedStart: value,
        };
        break;
      case "plannedEnd":
        data = {
          taskId: taskId,
          plannedEnd: value,
        };
        break;
      case "actualStart":
        data = {
          taskId: taskId,
          actualStart: value,
        };
        break;
      case "actualEnd":
        data = {
          taskId: taskId,
          actualEnd: value,
        };
        break;
      default:
        data = {
          taskId: taskId,
        };
        break;
    }

    dispatch(updateTask(data));
  };

  const classes = useStyles();

  return (
    <>
      <form className={classes.container} noValidate>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          onBlur={updateDate}
          margin="normal"
          variant="outlined"
          size="small"
          id="date"
          label={dateTitle}
          type="date"
          defaultValue={dateValue}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ "data-cy": dateTitle.toLowerCase() }}
        />
      </form>
    </>
  );
};

export default TaskDate;
