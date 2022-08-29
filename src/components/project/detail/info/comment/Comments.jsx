import { Avatar, Button, TextField, Tooltip, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useStyles from "./styles";
import ContentLoader from "../../../../common/loader/ContentLoader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProjectComment } from "../../../../../store/projectSlice";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Picker from "emoji-picker-react";

const Comments = ({ comments, pending, projectId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const commentBy = currentUser?.username;

  const onEmojiClick = (event, emojiObject) => {
    setComment((prevComment) => prevComment + " " + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.length > 3) {
      const data = { projectId, comment, commentBy };
      dispatch(createProjectComment(data));
    }
  };

  return (
    <>
      <div className={classes.comments}>
        {pending && <ContentLoader />}

        {!pending && comments && comments.length < 1 && (
          <Typography className={classes.message}>...</Typography>
        )}

        {!pending &&
          comments &&
          comments.map((item, i) => (
            <div className={classes.comment} key={i} id="comments-area">
              <Tooltip placement="left-start" title={item.commentBy}>
                <Avatar
                  src="https://i.pravatar.cc/150/150?q=1"
                  className={classes.avatar}
                />
              </Tooltip>
              <Typography
                className={classes.message}
                gutterBottom
                data-cy="info-comment-value"
              >
                {item.comment}
              </Typography>
            </div>
          ))}
      </div>
      <br />
      <div className={classes.commentFormSection}>
        <form className={classes.inputSection} onSubmit={handleSubmitComment}>
          <TextField
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={classes.commentInput}
            variant="outlined"
            size="small"
            label="Comment"
            placeholder="..."
            fullWidth
            defaultValue=""
            inputProps={{ "data-cy": "comment" }}
            InputProps={{
              endAdornment: (
                <>
                  <EmojiEmotionsIcon
                    onClick={() => setShowPicker((val) => !val)}
                    className={classes.emojiIcon}
                    color="warning"
                    variant="contained"
                    data-cy="emoji-btn"
                  />

                  <Button
                    className={classes.button}
                    variant="standard"
                    color="primary"
                    endIcon={<SendIcon />}
                    type="submit"
                    data-cy="comment-send-btn"
                  >
                    Post
                  </Button>
                </>
              ),
            }}
          />
          {showPicker && <Picker onEmojiClick={onEmojiClick} />}
        </form>
      </div>
    </>
  );
};

export default Comments;
