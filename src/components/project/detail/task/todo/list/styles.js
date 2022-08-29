import { makeStyles } from "@mui/styles";
import red from "@mui/material/colors/red";
import green from "@mui/material/colors/green";
import orange from "@mui/material/colors/orange";

const deleteIconColor = red[300];
const doneIconColor = green[300];
const notDoneIconColor = orange[300];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  todosProgressText: {},
  todosProgress: {
    padding: "2.5px 5px",
    backgroundColor: "lightgreen",
    width: "90%",
    margin: "15px auto 12px auto",
  },
  taskTodosContainer: {
    padding: "8px 2px",
    marginBottom: "6px",
    overflowY: "auto",
    // maxHeight: "120px",
    maxHeight: "calc(100vh/5.4)",
    width: "500px",
  },
  circularProgressContainer: {
    display: "flex",
    height: "calc(100vh/6)",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100vw)",
  },

  taskItem: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto",
    borderBottom: "2px solid #ecf0f1",
    padding: "10px 0",
  },
  iconTodoContainer: {
    margin: "8px 0",
  },
  iconTodoDone: {
    color: doneIconColor,
    cursor: "pointer",
  },
  iconTodoNotDone: {
    color: notDoneIconColor,
    cursor: "pointer",
  },
  todoText: {
    marginLeft: "8px",
  },
  deleteIconContainer: {
    color: deleteIconColor,
    cursor: "pointer",
  },
}));

export default useStyles;
