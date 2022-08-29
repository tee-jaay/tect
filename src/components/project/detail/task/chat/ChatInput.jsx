import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { Button, Fab, TextField } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import useStyles from "./styles";
import EmojiPicker from "emoji-picker-react";
import { Dropbox } from "dropbox";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ChatInput = ({ socket }) => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.user);
  const { task } = useSelector((state) => state.task);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [isUploading, setIsUploading] = useState(0);

  // eslint-disable-next-line
  const [filePath, setFilePath] = useState("");
  const createdBy = currentUser.username;
  const taskId = task?.id;
  const ACCESS_TOKEN = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;
  var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevValue) => prevValue + " " + emojiObject.emoji);
    setShowPicker(false);
  };

  const uploadToDropbox = (file) => {
    dbx
      .filesUpload({
        path: "/tasks/" + taskId + "/" + file.name,
        contents: file,
      })
      .then((response) => {
        setFilePath(response.result.path_lower);
        localStorage.setItem("uploadedFileId", response.result.id);
      })
      .then(() => {
        getTempURL(localStorage.getItem("uploadedFileId"));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsUploading(0);
      });
  };

  const getTempURL = (id) => {
    dbx
      .filesGetTemporaryLink({ path: id })
      .then((res) => {
        localStorage.setItem("uploadedFileURL", res.result.link);
      })
      .catch((err) => console.error(err));

    localStorage.removeItem("uploadingFile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var fileURL = localStorage.getItem("uploadedFileURL");

    socket.emit("message", { message, createdBy, filePath: fileURL, taskId });
    axios.post(`${process.env.REACT_APP_API_HOST}/tasks/chat/${taskId}`, {
      filePath: localStorage.getItem("uploadedFileURL"),
      message,
      createdBy,
    });

    setMessage("");

    localStorage.removeItem("uploadedFileURL");
  };

  const handleFileUpload = (file) => {
    setIsUploading(1);
    uploadToDropbox(file);
  };

  const fileUploadButton = () => {
    if (isUploading === 1) {
      return (
        <Fab
          disabled
          color="primary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
          style={{ marginTop: "8px" }}
        >
          <AttachFileIcon />
        </Fab>
      );
    }
    if (isUploading !== 1) {
      return (
        <Fab
          color="info"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
          style={{ marginTop: "8px" }}
        >
          <AttachFileIcon />
        </Fab>
      );
    }
  };

  return (
    <Box className={classes.inputBox}>
      <form encType="multipart/formdata" onSubmit={handleSubmit}>
        <TextField
          name="message"
          label="Message"
          size="small"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          inputProps={{ "data-cy": "task-chat-input" }}
          InputProps={{
            endAdornment: (
              <>
                <EmojiEmotionsIcon
                  onClick={() => setShowPicker((val) => !val)}
                  className={classes.emojiIcon}
                  color="warning"
                  variant="contained"
                />
                <Button
                  variant="standard"
                  color="primary"
                  endIcon={<SendIcon />}
                  className={classes.inputBoxBtn}
                  type="submit"
                  data-cy="chat-send-btn"
                >
                  Send
                </Button>
              </>
            ),
          }}
        />

        <label htmlFor="file">
          <input
            style={{ display: "none" }}
            id="file"
            name="file"
            type="file"
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
          {fileUploadButton()}
          {/* <Fab
            color="primary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
            style={{ marginTop: "8px" }}
          >
            <AttachmentIcon />
          </Fab> */}
        </label>

        <div style={{ float: "right" }}>
          {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
      </form>
    </Box>
  );
};

export default ChatInput;
