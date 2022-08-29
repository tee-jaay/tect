import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  assigneesContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  editAssignee: {
    position: "relative",
  },
  showBtn: {
    position: "absolute",
    right: 0,
  },
  usersList: {},
}));

export default useStyles;
