import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectDetailTaskList: {
    "& tr": {
      cursor: "pointer",
    },
  },
  projectDetailTaskItem: {
    cursor: "pointer",
  },
  modal: {
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.08)",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    maxHeight: "94%",
    width: "96%",
  },
  paper: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    width: "100%",
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
  select: {
    border: "1px solid #C4C4C4",
    color: "rgba(0, 0, 0, 0.87) !important",
    backgroundColor: "#FFFFFF",
    padding: "9px 11px",
    borderRadius: "5px",
    fontFamily: "'Montserrat',sans-serif",
  },
  option: {
    cursor: "pointer !important",
    color: "rgba(0, 0, 0, 0.87) !important",
    fontFamily: "'Montserrat',sans-serif",
  },
}));

export default useStyles;
