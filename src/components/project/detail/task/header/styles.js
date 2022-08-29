import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  taskTitleContainer: {
    marginLeft: "16px",
    width: "70%",
  },
  taskTitle: {
    fontWeight: "500",
    fontSize: "18px",
  },
  assigneesCloseContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  assignees: {
    display: "flex",
    alignItems: "center",
  },
  assignesList: {
    marginLeft: "12px",
  },
  close: {},
  closeIcon: {
    cursor: "pointer",
  },
}));

export default useStyles;
