import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { techAdd, techDelete } from "../../../../store/techSlice";
import ErrorAlert from "../../../common/alert/ErrorAlert";

const Tech = ({ techs }) => {
  const dispatch = useDispatch();
  const { techPending, error } = useSelector((state) => state.tech);
  const [techName, setTechName] = useState("");

  const handleSubmit = () => {
    let data = {
      name: techName,
    };
    if (techName.length >= 3) {
      dispatch(techAdd(data));
    }
    setTechName("");
  };

  const handleClickDelete = (id) => {
    dispatch(techDelete(id));
  };

  const showTechs = () => {
    if (techs && techs.length > 0) {
      return techs.map((item) => (
        <Chip
          sx={{ marginY: "2px" }}
          icon={
            <CloseIcon
              onClick={() => handleClickDelete(item._id)}
              sx={{ cursor: "pointer" }}
            />
          }
          key={item._id}
          label={item.name}
          variant="outlined"
        />
      ));
    } else {
      return null;
    }
  };

  return (
    <Box>
      <Typography variant="body1" sx={{ marginY: "4px" }}>
        Tech used
      </Typography>
      {error && <ErrorAlert message={error} />}

      {!techPending ? (
        <TextField
          sx={{ position: "relative" }}
          value={techName}
          onChange={(e) => setTechName(e.target.value)}
          label="Libraries"
          margin="dense"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <Button
                sx={{ position: "absolute", right: 0, border: "none" }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            ),
          }}
        />
      ) : null}

      {/* TODO:// fix state update after new Tech create */}

      <Box
        sx={{
          marginTop: "8px",
          justifyContent: "space-around",
        }}
      >
        {techPending && <CircularProgress />}
        {!techPending && showTechs()}
      </Box>
    </Box>
  );
};

export default Tech;
