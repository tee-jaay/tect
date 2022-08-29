import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTimeSheet } from "../../../../store/timeSheetSlice";

const LogAddForm = ({ open, setOpen, timesheetId }) => {
  const dispatch = useDispatch();
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const [note, setNote] = useState();

  const handleClose = () => {
    if (day !== "" || time !== "" || note !== "") {
      const sendData = { day, time, note, timesheetId };
      dispatch(updateTimeSheet(sendData));
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form>
        <DialogTitle>Add a work log</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a log about working on a task.
          </DialogContentText>

          <div className="">
            <TextField
              value={day}
              onChange={(e) => setDay(e.target.value)}
              margin="dense"
              variant="outlined"
              size="small"
              type="date"
              inputProps={{ "data-cy": "day" }}
            />
            <TextField
              value={time}
              onChange={(e) => setTime(e.target.value)}
              margin="dense"
              variant="outlined"
              size="small"
              type="time"
              inputProps={{ "data-cy": "time" }}
            />
          </div>
          <TextField
            value={note}
            onChange={(e) => setNote(e.target.value)}
            margin="dense"
            label="Note"
            type="text"
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={3}
            inputProps={{ "data-cy": "note" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            data-cy="save-timelog-btn"
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LogAddForm;
