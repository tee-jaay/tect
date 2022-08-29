import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../store/userSlice";
import TopBreadCrumb from "../common/layout/breadcrumb/TopBreadCrumb.jsx";
import ErrorAlert from "../common/alert/ErrorAlert.jsx";
import { Avatar, Card, Container, Tooltip } from "@mui/material";

const UserList = ({ page, pageTitle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, pending, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} />
      <TableContainer component={Card} raised>
        {error && <ErrorAlert message={error} />}
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> # </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!pending &&
              users &&
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    <Tooltip
                      key={user?.id}
                      title={user?.username}
                      placement="top"
                      component={Link}
                      to={`/users/${user?.id}`}
                      target="_blank"
                    >
                      <Avatar
                        alt={user?.username}
                        src={`https://i.pravatar.cc/150?q=${index}`}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user?.role.type}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      component={Link}
                      to={`/users/${user.id}`}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      component={Link}
                      to={`/users/${user.id}/edit`}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserList;
