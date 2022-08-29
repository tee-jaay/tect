import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIssuesByProjectId,
  updateIssue,
} from "../../../../store/issueSlice";
import {
  Avatar,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import {
  issueSeverityChip,
  priorityColor,
  statusColor,
  typeChip,
} from "../../../../helpers/DataDisplay";
import TopBreadCrumb from "../../../common/layout/breadcrumb/TopBreadCrumb";
import { getProjectById } from "../../../../store/projectSlice";
import IssueCreate from "./IssueCreate";
import useStyles from "./styles";
import IssueElement from "./IssueElement";

const Issues = ({ page, pageTitle }) => {
  const classes = useStyles();
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { issues, pending, error } = useSelector((state) => state.issue);
  const { currentUser } = useSelector((state) => state.user);

  const [text, setText] = useState("");
  const [theIssueId, setTheIssueId] = useState("");

  const handleChange = (e) => {
    setTheIssueId(e.issueId);
    setText(e.comment);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const commentBy = currentUser.username;
    const data = { text, theIssueId, commentBy };
    dispatch(updateIssue(data));
    setText("");
  };

  useEffect(() => {
    dispatch(getProjectById(projectId));
    dispatch(fetchIssuesByProjectId(projectId));
  }, [dispatch, projectId]);

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} projectId={projectId} />

      <Card raised sx={{ backgroundColor: "transparent" }}>
        <div className={classes.root}>
          {issues &&
            issues.map((issue, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container>
                    <Grid item md={4}>
                      <IssueElement title={"About"} value={issue.title} />

                      <IssueElement
                        title={"Status"}
                        value={statusColor(issue.status)}
                        style={{ textTransform: "uppercase" }}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <IssueElement title={"Id"} value={issue.id} />
                    </Grid>
                    <Grid item md={2}>
                      <IssueElement
                        title={"Created"}
                        value={issue.createdAt.substring(0, 10)}
                      />
                      <IssueElement
                        title={"Updated"}
                        value={issue.updatedAt.substring(0, 10)}
                      />
                    </Grid>
                    <Grid item md={2}>
                      <IssueElement title={"Issues"} value={issue.createdBy} />
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item md={5}>
                      <Typography variant="body2" component="body2">
                        {issue.description}
                      </Typography>
                    </Grid>
                    <Grid item md={7}>
                      <Table size="small" component={Paper}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Priority</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Start</TableCell>
                            <TableCell>End</TableCell>
                            <TableCell align="right">Severity</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              {priorityColor(issue.priority)}
                            </TableCell>
                            <TableCell>{typeChip(issue.type)}</TableCell>
                            <TableCell>{issue.start}</TableCell>
                            <TableCell>{issue.end}</TableCell>
                            <TableCell align="right">
                              {issueSeverityChip(issue.severity)}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Grid>
                    <Grid item xs={12}>
                      <br />
                      <Divider />
                      <div className="comments">
                        {issue.comments.map((item, i) => (
                          <div
                            key={i}
                            className="comment"
                            style={{
                              display: "flex",
                              marginTop: "10px",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              src="https://i.pravatar.cc/50/50"
                              style={{ marginRight: "10px" }}
                            />
                            <Typography>{item.text}</Typography>
                          </div>
                        ))}
                      </div>
                      <br />
                      <form onSubmit={handleSubmitComment}>
                        <TextField
                          value={text}
                          onChange={(e) =>
                            handleChange({
                              issueId: issue.id,
                              comment: e.target.value,
                            })
                          }
                          defaultValue=""
                          fullWidth
                          variant="outlined"
                          label="Comment"
                          size="small"
                          multiline
                          rows={2}
                          inputProps={{ "data-cy": "comment-text" }}
                        />
                        <Button
                          type="submit"
                          variant="outlined"
                          style={{ marginTop: "8px" }}
                          data-cy="comment-post-btn"
                        >
                          Post
                        </Button>
                      </form>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          <IssueCreate
            projectId={projectId}
            createdBy={currentUser.username}
            pending={pending}
            error={error}
          />
        </div>
      </Card>
    </Container>
  );
};

export default Issues;
