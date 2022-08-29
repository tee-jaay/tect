import { useState } from "react";
import { useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import IssueElement from "./IssueElement";
import { createIssue } from "../../../../store/issueSlice";
import ContentLoader from "../../../common/loader/ContentLoader";
import ErrorAlert from "../../../common/alert/ErrorAlert";

const IssueCreate = ({ projectId, createdBy, pending, error }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [priority, setPriority] = useState();
  const [type, setType] = useState();
  const [severity, setSeverity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      projectId,
      createdBy,
      title,
      description,
      start,
      end,
      priority,
      type,
      severity,
    };
    dispatch(createIssue(sendData));
    setTitle("");
    setDescription("");
    setStart("");
    setEnd("");
    setPriority("");
    setType("");
    setSeverity("");
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container>
          <Grid item md={4}>
            <IssueElement title={"New Issue"} />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        {error && <ErrorAlert message={error} />}
        {pending && <ContentLoader />}
        <form onSubmit={handleSubmit}>
          {!pending && (
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  label="Issue About"
                  size="small"
                  variant="outlined"
                  fullWidth
                  defaultValue=""
                  inputProps={{ "data-cy": "issue-about" }}
                />

                <TextField
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  defaultValue=""
                  label="Issue Description"
                  size="small"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  margin="normal"
                  inputProps={{ "data-cy": "issue-description" }}
                />
              </Grid>
              <Grid item md={6}>
                <Grid container spacing={3}>
                  <Grid item md={4}>
                    <FormControl fullWidth>
                      <InputLabel size="small" id="priority-label">
                        Priority
                      </InputLabel>
                      <Select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        defaultValue=""
                        labelId="priority-label"
                        id="priority"
                        label="Priority"
                        size="small"
                        required
                        data-cy="priority-select"
                      >
                        <MenuItem value="high" data-cy="priority-value-high">
                          High
                        </MenuItem>
                        <MenuItem
                          value="medium"
                          data-cy="priority-value-medium"
                        >
                          Medium
                        </MenuItem>
                        <MenuItem value="low" data-cy="priority-value-low">
                          Low
                        </MenuItem>
                        <MenuItem
                          value="urgent"
                          data-cy="priority-value-urgent"
                        >
                          Urgent
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={4}>
                    <FormControl fullWidth>
                      <InputLabel size="small" id="type-label">
                        Type
                      </InputLabel>
                      <Select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        defaultValue=""
                        labelId="type-label"
                        id="type"
                        label="Priority"
                        size="small"
                        required
                        data-cy="type-select"
                      >
                        <MenuItem value="upgrade" data-cy="type-value-upgrade">
                          Upgrade
                        </MenuItem>
                        <MenuItem value="bug" data-cy="type-value-bug">
                          Bug
                        </MenuItem>
                        <MenuItem
                          value="security"
                          data-cy="type-value-security"
                        >
                          Security
                        </MenuItem>
                        <MenuItem value="feature" data-cy="type-value-feature">
                          Feature
                        </MenuItem>
                        <MenuItem value="update" data-cy="type-value-update">
                          Update
                        </MenuItem>
                        <MenuItem
                          value="maintenance"
                          data-cy="type-value-maintenance"
                        >
                          Maintenance
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={4}>
                    <FormControl fullWidth>
                      <InputLabel size="small" id="severity-label">
                        Severity
                      </InputLabel>
                      <Select
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                        defaultValue=""
                        labelId="severity-label"
                        id="severity"
                        label="Priority"
                        size="small"
                        required
                        data-cy="severity-select"
                      >
                        <MenuItem value="minor" data-cy="severity-value-minor">
                          Minor
                        </MenuItem>
                        <MenuItem value="major" data-cy="severity-value-major">
                          Major
                        </MenuItem>
                        <MenuItem
                          value="moderate"
                          data-cy="severity-value-moderate"
                        >
                          Moderate
                        </MenuItem>
                        <MenuItem
                          value="critical"
                          data-cy="severity-value-critical"
                        >
                          Critical
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={6}>
                    <Typography variant="body1">Start Date</Typography>
                    <TextField
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                      label=""
                      size="small"
                      variant="outlined"
                      type="date"
                      fullWidth
                      inputProps={{ "data-cy": "start-date" }}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="body1">End Date</Typography>
                    <TextField
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                      placeholder="End"
                      label=""
                      size="small"
                      variant="outlined"
                      type="date"
                      fullWidth
                      inputProps={{ "data-cy": "end-date" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid container>
            <Grid item md={12}>
              {pending ? (
                <Button
                  type="submit"
                  className={classes.submitBtn}
                  variant="contained"
                  disabled
                >
                  Save
                </Button>
              ) : (
                <Button
                  type="submit"
                  className={classes.submitBtn}
                  variant="contained"
                  data-cy="save-btn"
                >
                  Save
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default IssueCreate;
