import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Picker from "emoji-picker-react";
import {
  Avatar,
  Button,
  InputAdornment,
  Grid,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Card,
} from "@mui/material";
import { createWallPostByUserId } from "../../../store/wallPostSlice";
import ErrorAlert from "../../common/alert/ErrorAlert";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ContentLoader from "../../common/loader/ContentLoader";
import useStyles from "../styles";

const Discussion = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPicker, setShowPicker] = useState(false);
  const [wallPost, setWallPost] = useState("");
  const { wallPosts, pending, error } = useSelector((state) => state.wallPost);
  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();

  const onEmojiClick = (event, emojiObject) => {
    setWallPost((prevWallPost) => prevWallPost + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId: user.id,
      content: wallPost,
      postBy: user.name,
    };
    if (wallPost.length > 3) {
      dispatch(createWallPostByUserId(data));
    }
    setWallPost("");
  };

  return (
    <Grid item sm={8}>
      {error && <ErrorAlert message={error} />}
      <Card raised className={classes.shareContainer} sx={{ mb: 1 }}>
        <div className={classes.shareHeader}>
          <Typography variant="h6" gutterBottom>
            Posts by you
          </Typography>
          <span>Date: {cDate && cDate}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={wallPost}
            onChange={(e) => setWallPost(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows="1"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <TagFacesIcon
                    onClick={() => setShowPicker((val) => !val)}
                    className={classes.emojiIcon}
                  />
                </InputAdornment>
              ),
            }}
          />
          {showPicker && <Picker onEmojiClick={onEmojiClick} />}

          <Button type="submit" sx={{ mt: 1 }} size="small" variant="outlined">
            Post
          </Button>
        </form>
      </Card>
      {pending && <ContentLoader />}
      {!pending &&
        wallPosts &&
        wallPosts.map((post, i) => (
          <Paper className={classes.postsContainer} key={i}>
            <Tooltip title={post.postBy} placement="left-start">
              <Avatar
                alt={post.postBy}
                src="/static/images/avatar/1.jpg"
                className={classes.postAvatar}
              />
            </Tooltip>
            {post.content}
          </Paper>
        ))}
    </Grid>
  );
};

export default Discussion;
