import { useSelector } from "react-redux";
import io from "socket.io-client";

import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import useStyles from "./styles";

const socket = io(process.env.REACT_APP_API_HOST);

const Chat = () => {
  const classes = useStyles();
  const { task } = useSelector((state) => state.task);

  return (
    <div className={classes.root}>
      <ChatMessages socket={socket} taskId={task && task.id} />
      <ChatInput socket={socket} />
    </div>
  );
};

export default Chat;
