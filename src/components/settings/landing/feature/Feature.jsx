import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import { featureAdd } from "../../../../store/featureSlice";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import { useSelector } from "react-redux";

const Feature = () => {
  const dispatch = useDispatch();
  const { features, pending, error } = useSelector((state) => state.feature);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (image && title && content) {
      var data = new FormData();
      data.append("image", image);
      data.append("title", title);
      data.append("content", content);

      dispatch(featureAdd(data));
    }
  };

  const pendingButtons = () => {
    return (
      <Box sx={{ flexDirection: "row", justifyItems: "space-between" }}>
        <Button
          startIcon={<AddPhotoAlternateTwoToneIcon />}
          size="small"
          variant="outlined"
          component="label"
          margin="dense"
          sx={{ marginY: "16px" }}
          disabled
        >
          Select
          <input id="logoImg" type="file" hidden />
        </Button>
      </Box>
    );
  };

  const imageSelectUpload = () => {
    return (
      <Box sx={{ flexDirection: "row", justifyItems: "space-between" }}>
        <Button
          startIcon={<AddPhotoAlternateTwoToneIcon />}
          size="small"
          variant="outlined"
          component="label"
          margin="dense"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
          sx={{ marginY: "16px" }}
        >
          Select
          <input id="logoImg" type="file" hidden />
        </Button>
      </Box>
    );
  };

  const showFeatures = () => {
    if (features && features.length > 0) {
      return features?.map((item) => (
        <Grid item md={3} key={item._id}>
          <Card sx={{ padding: "12px" }}>
            <Typography variant="body1">{item?.title}</Typography>
            <img src={item?.image} alt="" style={{ maxWidth: "100%" }} />
            <Typography variant="body2">{item.content}</Typography>
          </Card>
        </Grid>
      ));
    } else {
      return null;
    }
  };

  return (
    <Grid container spacing={3}>
      {error && <ErrorAlert message={error} />}
      <Grid item md={3}>
        <Card sx={{ padding: "12px" }}>
          <Typography variant="body1">Feature </Typography>

          {pending ? pendingButtons() : imageSelectUpload()}

          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            margin="dense"
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            rows={3}
            label="Description"
            size="small"
            fullWidth
            sx={{ marginY: "12px" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Button variant="outlined" size="small" onClick={handleSubmit}>
            Add <AddBoxTwoToneIcon />
          </Button>
        </Card>
      </Grid>
      {pending && <CircularProgress />}
      {!pending && showFeatures()}
    </Grid>
  );
};

export default Feature;
