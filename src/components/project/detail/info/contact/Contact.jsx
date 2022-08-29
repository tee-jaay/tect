import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
} from "@mui/material";

import VideoCameraFrontTwoToneIcon from "@mui/icons-material/VideoCameraFrontTwoTone";
import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubSectionTitle from "../inc/SubSectionTitle";
import { clearMessage, sendEmails } from "../../../../../store/messageSlice";

let subjectValue = "";

const Contact = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);
  const { message, pending } = useSelector((state) => state.message);
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    setOpen(false);
    if (subject.length < 3) {
      subjectValue = `About project # ${project.id}`;
    } else {
      subjectValue = subject;
    }

    let data = {
      subject: subjectValue,
      content: content,
      projectId: project.id,
    };
    dispatch(sendEmails(data));
    setSubject("");
    setContent("");
  };

  const showToast = () => {
    return toast.success(`${message.message}`, {
      onOpen: dispatch(clearMessage()),
    });
  };

  const sendEmailBtn = () => {
    if (pending) {
      return (
        <Fab
          size="small"
          component="span"
          aria-label="email-to-participants"
          variant="extended"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            backgroundColor: "rgb(241 241 241)",
            color: "white",
          }}
        >
          <EmailTwoToneIcon />
        </Fab>
      );
    } else {
      return (
        <Fab
          onClick={handleClickOpen}
          size="small"
          component="span"
          aria-label="email-to-participants"
          variant="extended"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            backgroundColor: "#9c27b0",
            color: "white",
          }}
          data-cy="email-btn"
        >
          <EmailTwoToneIcon />
        </Fab>
      );
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SubSectionTitle content={"Communicate:"} />
        {sendEmailBtn()}

        <Fab
          size="small"
          component="span"
          aria-label="group-phone-meeting"
          variant="extended"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            backgroundColor: "#1976d2",
            color: "white",
          }}
          data-cy="phone-btn"
        >
          <PhoneInTalkTwoToneIcon />
        </Fab>

        <Fab
          size="small"
          component="span"
          aria-label="video-conference"
          variant="extended"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            backgroundColor: "#ed6c02",
            color: "white",
          }}
          data-cy="video-btn"
        >
          <VideoCameraFrontTwoToneIcon />
        </Fab>

        <Fab
          color="inherit"
          size="small"
          component="span"
          aria-label="notify"
          variant="extended"
          style={{
            marginLeft: "8px",
          }}
          data-cy="notify-btn"
        >
          <NotificationsActiveTwoToneIcon />
        </Fab>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Email to participants</DialogTitle>
        <DialogContent>
          {/* <DialogContentText> */}
          {/* The email will be send using a FastAPI endpoint */}
          {/* </DialogContentText> */}
          <TextField
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            autoFocus
            size="small"
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="outlined"
            inputProps={{ "data-cy": "subject" }}
          />
          <TextField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            size="small"
            margin="dense"
            id="content"
            label="content"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ "data-cy": "content" }}
          />
        </DialogContent>
        <DialogActions sx={{ paddingBottom: "12px" }}>
          <Button onClick={handleClose} data-cy="cancel-btn">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSend} data-cy="send-btn">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      {message && showToast()}
    </>
  );
};

export default Contact;
