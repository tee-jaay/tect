import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "16px",
  },
  subTitle: {
    fontSize: "14px",
  },
  priorities: {
    marginLeft: "8px",
    border: "1px solid #C4C4C4",
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.87) !important",
    padding: "9px 11px",
    borderRadius: "5px",
    fontFamily: "'Montserrat',sans-serif",
  },
  selectItem: {
    cursor: "pointer !important",
    color: "rgba(0, 0, 0, 0.87) !important",
    fontFamily: "'Montserrat',sans-serif",
    textTransform: "capitalize",
    padding: "6px 8px",
    "&:hover": {
      backgroundColor: "#ecf0f1",
    },
  },
  creator: {
    marginTop: "32px",
  },
}));

export default useStyles;
