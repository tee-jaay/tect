import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMeetingComment } from "../../../../../store/meetingSlice";
import useStyles from "./styles";

const MessageSection = ({ pending, comments, meetingId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const createdBy = currentUser.username;
  const [message, setMessage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = { createdBy, message, meetingId };
    dispatch(createMeetingComment(sendData));
    setMessage("");
  };
  return (
    <>
      <Paper className={classes.messages}>
        {!pending &&
          comments &&
          comments.map((item, i) => (
            <div
              className={classes.message}
              key={i}
              data-cy="meeting-message-value"
            >
              <Avatar src="https://i.pravatar.cc/50/50?q=1" />
              <Typography className={classes.text}>{item.message}</Typography>
            </div>
          ))}
      </Paper>
      <form onSubmit={handleSubmit} data-cy="message-form">
        <div className={classes.inputSection}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="small"
            defaultValue=""
            variant="outlined"
            fullWidth
            label="Message"
            placeholder="..."
            sx={{ position: "relative" }}
            inputProps={{ "data-cy": "message" }}
            InputProps={{
              endAdornment: (
                <Button
                  type="submit"
                  color="primary"
                  size="small"
                  variant="standard"
                  sx={{ position: "absolute", right: 0 }}
                  data-cy="send-btn"
                >
                  Send
                </Button>
              ),
            }}
          />
        </div>
      </form>
    </>
  );
};

export default MessageSection;
