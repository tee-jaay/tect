import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  comments: {
    overflowY: "auto",
  },
  comment: {
    display: "flex",
    backgroundColor: "rgb(241 241 241)",
    padding: "8px 12px",
    borderRadius: "8px",
    marginBottom: "8px",
    width: "98%",
  },
  avatar: {},
  message: { paddingLeft: "16px" },
  inputSection: {
    // padding: "12px 0",
    display: "flex",
    flexDirection: "column",
  },
  commentInput: {},
  emojiIcon: {
    cursor: "pointer",
  },
  button: {
    // marginTop: "8px",
    // marginLeft: "8px",
    paddingTop: "8px !important",
    paddingBottom: "8px !important",
    right: "-14px",
  },
}));

export default useStyles;
