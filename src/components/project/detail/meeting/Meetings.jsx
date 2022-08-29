import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, Container, Paper, Typography } from "@mui/material";
import { fetchMeetingsByProjectId } from "../../../../store/meetingSlice";
import { Grid } from "@mui/material";
import MessageSection from "./message-section/MessageSection";
import useStyles from "../styles";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import TopBreadCrumb from "../../../common/layout/breadcrumb/TopBreadCrumb";
import CountertopsIcon from "@mui/icons-material/Countertops";
import FormDialog from "./FormDialog";
import ContentLoader from "../../../common/loader/ContentLoader";

const Meetings = ({ page, pageTitle }) => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { meetings, pending, error } = useSelector((state) => state.meeting);

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchMeetingsByProjectId(projectId));
  }, [dispatch, projectId]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} projectId={projectId} />
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Box component={Paper} className={classes.meetingHeader}>
            <Typography>
              <Button
                variant="contained"
                size="small"
                startIcon={<CountertopsIcon />}
                onClick={handleClickOpen}
                data-cy="create-new-meeting-btn"
              >
                Create new meeting
              </Button>
            </Typography>
          </Box>
          <FormDialog open={open} setOpen={setOpen} />
        </Grid>
      </Grid>
      {pending && <ContentLoader />}
      {!pending &&
        meetings &&
        meetings.map((meeting, index) => (
          <Grid
            container
            key={index}
            component={Card}
            className={classes.boxStyles}
            raised
          >
            <Grid item sm={6}>
              <Typography variant="h6" data-cy="meeting-title-value">
                {meeting.title}
              </Typography>
              <Typography variant="subtitle1" data-cy="meeting-agenda-value">
                {meeting.agenda}
              </Typography>
              <p data-cy="meeting-location-value">
                Location # {meeting.location}
              </p>
              <p data-cy="meeting-address-value">Address # {meeting.address}</p>
              <p data-cy="meeting-phone-value">Phone # {meeting.phone}</p>
              <p data-cy="meeting-created-by-value">
                Created by: {meeting.createdBy}
              </p>
              <p data-cy="meeting-bookmark-value">
                Bookmark: {meeting.bookmark}
              </p>
              <p data-cy="meeting-status-value">Status: {meeting.status}</p>
              <p data-cy="meeting-date-value">Date: {meeting.date}</p>
              <p data-cy="meeting-time-value">Time: {meeting.time}</p>
              <p data-cy="meeting-duration-value">
                Duration: {meeting.duration} hrs
              </p>
            </Grid>
            <Grid item sm={6}>
              <MessageSection
                pending={pending}
                meetingId={meeting && meeting.id}
                comments={meeting && meeting.comments}
              />
            </Grid>
          </Grid>
        ))}
      {error && <ErrorAlert message={error} />}
    </Container>
  );
};

export default Meetings;
