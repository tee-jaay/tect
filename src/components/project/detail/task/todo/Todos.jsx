import { Typography } from "@mui/material";
import TodoAdd from "./add/TodoAdd";
import TodoList from "./list/TodoList";
import useStyles from "./styles";

const Todos = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.sectionTitle} variant="h6" component="h6">
        Todos
      </Typography>
      <TodoAdd />
      <TodoList />
    </>
  );
};

export default Todos;
