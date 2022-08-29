import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    width: "96%",
    maxHeight: "90%",
    margin: "auto",
  },
  projectTaskHeader: {
    padding: "16px 15px",
  },
  projectTaskContent: {
    padding: "30px",
  },
  divider: {
    margin: "0",
  },
  circularProgressContainer: {
    height: "calc(100vh/4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxStyles: {
    padding: "10px 12px",
    marginBottom: "12px",
  },
  projectSubtitles: {
    display: "flex",
    justifyContent: "space-between",
  },
  meetingHeader: {
    padding: "16px 12px",
    marginBottom: "12px",
  },
  dateTimeDuration: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
