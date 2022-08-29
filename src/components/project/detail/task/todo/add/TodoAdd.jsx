import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../../../../../store/todoSlice";
import ErrorAlert from "../../../../../common/alert/ErrorAlert";
import useStyles from "./styles";

const TodoAdd = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todoAddRef = useRef(null);

  const [todo, setTodo] = useState();

  const { currentUser } = useSelector((state) => state.user);
  const { pending, error } = useSelector((state) => state.todo);
  const { task } = useSelector((state) => state.task);

  let createdBy = currentUser.username;

  const handleCreate = (e) => {
    e.preventDefault();
    let data = "";
    data = {
      todo,
      taskId: task.id,
      createdBy,
    };
    dispatch(createTodo(data));
    todoAddRef.current.focus();

    setTodo("");
  };

  return (
    <>
      <div className={classes.root}>
        {error && <ErrorAlert message={error} />}
        <form onSubmit={handleCreate} id="addForm">
          {pending ? (
            <TextField
              className={classes.addTodo}
              disabled={true}
              variant="outlined"
              defaultValue=""
              label="..."
              size="small"
            />
          ) : (
            <TextField
              ref={todoAddRef}
              onChange={(e) => setTodo(e.target.value)}
              className={classes.addTodo}
              variant="outlined"
              label="Add a todo"
              size="small"
              value={todo}
              inputProps={{ "data-cy": "todo-text" }}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default TodoAdd;
