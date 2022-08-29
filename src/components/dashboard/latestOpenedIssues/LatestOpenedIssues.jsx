import React from "react";
import _ from "lodash";
import {
  Card,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { issueSeverityChip, typeChip } from "../../../helpers/DataDisplay";
import useStyles from "./styles";

const LatestOpenedIssues = ({ pending, latestOpenIssues }) => {
  const classes = useStyles();
  return (
    <Card raised sx={{ paddingX: "12px", paddingTop: "8px" }}>
      <Typography variant="h6" component="h6" className={classes.title}>
        Recent Issues
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>About</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Issuer</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pending &&
              _.times(6, (i) => (
                <React.Fragment key={i}>
                  <TableRow>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation={false} />
                    </TableCell>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            {!pending &&
              latestOpenIssues &&
              latestOpenIssues.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Link
                      to={`/projects/${item.projectId}/issues`}
                      className={classes.linkTitle}
                    >
                      {" "}
                      {item.title.substring(0, 30)}
                    </Link>
                  </TableCell>
                  <TableCell>{typeChip(item.type)}</TableCell>
                  <TableCell>{item.createdBy}</TableCell>
                  <TableCell>{issueSeverityChip(item.severity)}</TableCell>
                  <TableCell>{item.createdAt.substring(0, 10)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default LatestOpenedIssues;
