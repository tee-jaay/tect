import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import { serverAdd, serverDelete } from "../../../../store/serverSlice";

const Servers = ({ servers, serverPending, error }) => {
  const dispatch = useDispatch();
  const [serverName, setServerName] = useState("");

  const handleSubmit = () => {
    if (serverName.length > 3) {
      let data = {
        name: serverName,
      };
      dispatch(serverAdd(data));
    }
    setServerName("");
  };

  const deleteServer = (e, id) => {
    e.preventDefault();
    dispatch(serverDelete(id));
  };

  const showServers = () => {
    if (servers && servers.length > 0) {
      return servers.map((item) => (
        <Button
          key={item._id}
          variant="standard"
          color="info"
          endIcon={<DeleteForeverIcon />}
          onClick={(e) => deleteServer(e, item._id)}
        >
          {item.name}
        </Button>
      ));
    } else {
      return null;
    }
  };

  return (
    <Box sx={{ flexDirection: "column" }}>
      <Typography variant="body1" sx={{ marginY: "4px" }}>
        Servers & Clouds
      </Typography>
      {error && <ErrorAlert message={error} />}
      <TextField
        label="Online services"
        margin="dense"
        size="small"
        fullWidth
        value={serverName}
        onChange={(e) => setServerName(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              sx={{ position: "absolute", right: 0, border: "none" }}
              onClick={handleSubmit}
            >
              Add
            </Button>
          ),
        }}
      />

      {/* TODO:// fix state update after new Server create */}

      <Box
        sx={{
          marginTop: "8px",
          justifyContent: "space-around",
        }}
      >
        {serverPending && <CircularProgress />}
        {showServers()}
      </Box>
    </Box>
  );
};

export default Servers;
