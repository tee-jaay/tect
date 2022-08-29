import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  messages: {
    padding: "6px",
    minHeight: "48px",
  },
  message: {
    display: "flex",
    margin: "8px 6px",
    padding: "12px",
    borderRadius: "4px",
    backgroundColor: "rgb(241,241,241)",
  },
  text: {
    paddingLeft: "12px",
  },
  inputSection: {
    padding: "12px 0",
    display: "flex",
  },
}));

export default useStyles;
