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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createMeeting } from "../../../../store/meetingSlice";
import useStyles from "../styles";

const FormDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleClose = () => {
    setOpen(false);
    if (title && agenda) {
      const createdBy = currentUser.username;
      const sendData = {
        title,
        agenda,
        date,
        time,
        duration,
        createdBy,
        projectId,
        location,
        address,
        phone,
      };
      dispatch(createMeeting(sendData));
    }
  };

  const [title, setTitle] = useState();
  const [agenda, setAgenda] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  return (
    <Dialog open={open} onClose={handleClose}>
      <form>
        <DialogTitle>Create Meeting</DialogTitle>
        <DialogContent>
          <DialogContentText>Add meeting about this project.</DialogContentText>

          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ "data-cy": "title" }}
          />
          <TextField
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            margin="dense"
            label="Agenda"
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={5}
            inputProps={{ "data-cy": "agenda" }}
          />
          <div className={classes.dateTimeDuration}>
            <TextField
              value={date}
              onChange={(e) => setDate(e.target.value)}
              margin="dense"
              variant="outlined"
              size="small"
              type="date"
              inputProps={{ "data-cy": "date" }}
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

            <TextField
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              margin="dense"
              variant="outlined"
              size="small"
              type="number"
              inputProps={{ "data-cy": "duration" }}
            />
          </div>
          <TextField
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            margin="dense"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ "data-cy": "location" }}
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ "data-cy": "address" }}
          />
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin="dense"
            label="Phone No."
            type="tel"
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ "data-cy": "phone" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-cy="save-btn" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormDialog;
