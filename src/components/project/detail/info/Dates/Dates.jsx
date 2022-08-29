import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import SubSectionTitle from "../inc/SubSectionTitle";
import useStyles from "../styles";

const Dates = ({ createdBy, createdAt, updatedAt }) => {
  const classes = useStyles();
  return (
    <>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <SubSectionTitle content={"Started by:"} />
              <Link className={classes.profileLink} to={`/users/${createdBy}`}>
                {createdBy}
              </Link>
            </TableCell>
            <TableCell>
              <SubSectionTitle content={"Created at:"} /> {createdAt}
            </TableCell>
            <TableCell>
              <SubSectionTitle content={"Updated at:"} /> {updatedAt}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Dates;
