import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "12px 0",
    padding: "0 12px ",
  },
  chatBox: {
    padding: "12px",
    backgroundColor: "#f1f1f1",
    maxHeight: "calc(100vh/2)",
    overflowY: "auto",
  },
  chatItem: {
    backgroundColor: "#ffffff",
    marginBottom: "8px",
  },
  me: {
    border: "2px solid #81c784",
  },
  others: {
    border: "2px solid #ffb74d",
  },
  inputBox: {
    margin: "8px 0 !important",
  },
  emojiIcon: {
    cursor: "pointer",
  },
  inputBoxBtn: {
    marginTop: "1px !important",
    right: "-14px !important",
  },
}));

export default useStyles;
