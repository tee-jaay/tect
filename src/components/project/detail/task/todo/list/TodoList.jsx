import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CircularProgress,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  Tooltip,
} from "@mui/material";

import useStyles from "./styles.js";
import { destroyTodo, updateTodo } from "../../../../../../store/todoSlice.js";
import moment from "moment";

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { todos, pending, error } = useSelector((state) => state.todo);
  const { currentUser } = useSelector((state) => state.user);

  const handleUpdate = (todoId, done) => {
    let doneBy = currentUser.name;
    let data = { todoId: todoId, done: !done, doneBy: doneBy };
    dispatch(updateTodo(data));
  };

  const countDone = (items) => {
    const countDone = items.filter((item) => item.done === true);
    return countDone.length;
  };

  return (
    <>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={1}>
          <AssignmentTurnedInRoundedIcon />
        </Grid>
        <Grid item xs={11}>
          {!pending && todos ? (
            <Typography
              className={classes.todosProgressText}
              variant="body1"
              component="body1"
            >
              {countDone(todos)} out of {todos.length} todos done
            </Typography>
          ) : (
            ""
          )}
          {error && error}
        </Grid>
        <div className={classes.todosProgress}></div>
      </Grid>

      <Grid container spacing={0} className={classes.taskTodosContainer}>
        {pending && (
          <div className={classes.circularProgressContainer}>
            <CircularProgress size={32} />
          </div>
        )}
        {todos &&
          todos
            .slice(0)
            .reverse()
            .map((item, index) => (
              <React.Fragment key={item.id}>
                <ListItem
                  secondaryAction={
                    <Tooltip
                      title="Double click to Delete"
                      placement="left-start"
                    >
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onDoubleClick={() => dispatch(destroyTodo(item.id))}
                        data-cy={`todo-delete-${index}`}
                      >
                        <DeleteIcon color="warning" />
                      </IconButton>
                    </Tooltip>
                  }
                  className={classes.todoItem}
                >
                  {item.done === true ? (
                    <React.Fragment>
                      <ListItemAvatar>
                        <CheckCircleOutlineRoundedIcon
                          onClick={() => handleUpdate(item.id, item.done)}
                          className={classes.iconTodoDone}
                        />
                      </ListItemAvatar>

                      <ListItemText
                        primary={<strike>{item.todo}</strike>}
                        secondary={`Done by ${item.doneBy} at ${moment(
                          item.updatedAt
                        )
                          .startOf("hour")
                          .fromNow()}`}
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <ListItemAvatar>
                        <MoreHorizIcon
                          onClick={() => handleUpdate(item.id, item.done)}
                          className={classes.iconTodoNotDone}
                          data-cy={`todo-done-${index}`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.todo}
                        secondary=""
                        data-cy="todo-text-value"
                      />
                    </React.Fragment>
                  )}
                </ListItem>
              </React.Fragment>
            ))}
      </Grid>
    </>
  );
};

export default TodoList;
