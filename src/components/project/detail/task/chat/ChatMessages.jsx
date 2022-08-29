import { useEffect, useState } from "react";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import ReportIcon from "@mui/icons-material/Report";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import useStyles from "./styles";
import axios from "axios";
import ContentLoader from "../../../../common/loader/ContentLoader";

const ChatMessages = ({ socket, taskId }) => {
  const classes = useStyles();
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  useEffect(() => {
    if (receivedMessages.length < 1) {
      axios
        .get(`tasks/chat/${taskId}`)
        .then((res) => setReceivedMessages(res.data))
        .catch((err) => {
          console.error(err);
        });
    }
    else if (receivedMessages[0].taskId !== taskId) {
      setReceivedMessages([]);
      axios
        .get(`tasks/chat/${taskId}`)
        .then((res) => setReceivedMessages(res.data))
        .catch((err) => {
          console.error(err);
        });
    } else {
      socket.on("message", (payload) => {
        setReceivedMessages([...receivedMessages, payload]);
      });
    }
    setMessagesLoading(false);
  }, [taskId, socket, receivedMessages]);

  return (
    <Box className={classes.chatBox} sx={{ borderRadius: 1 }}>
      <List dense="dense">
        {messagesLoading && <ContentLoader />}
        {!messagesLoading &&
          receivedMessages &&
          receivedMessages.map((item, i) => (
            <ListItem
              key={i}
              sx={{ borderRadius: 1 }}
              className={classes.chatItem}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <ReportIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Tooltip title={item.createdBy} placement="left-start">
                  <Avatar
                    src={`https://i.pravatar.cc/150/150?q=${i}`}
                    className={classes.others}
                  />
                </Tooltip>
              </ListItemAvatar>

              <ListItemText
                primary={item.message}
                secondary={
                  item.filePath && (
                    <a href={item.filePath} target="_blank" rel="noreferrer">
                      <FilePresentIcon color={"info"} />
                    </a>
                  )
                }
                data-cy="chat-message-value"
              />
            </ListItem>
          ))}

        {receivedMessages.length < 1 && "..."}
      </List>
    </Box>
  );
};

export default ChatMessages;
