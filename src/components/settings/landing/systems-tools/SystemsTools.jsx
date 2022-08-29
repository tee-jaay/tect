import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, TextField, Typography } from "@mui/material";
import PhotoTwoToneIcon from "@mui/icons-material/PhotoTwoTone";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import { toolAdd } from "../../../../store/toolSlice";
import { Box } from "@mui/system";

const SystemsTools = ({ tools, toolPending }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const handleSend = () => {
    if (name.length > 3 && image) {
      var data = new FormData();
      data.append("name", name);
      data.append("image", image);
      dispatch(toolAdd(data));
      setName("");
      setImage(null);
    }
  };

  const toolInputBoxDisabled = () => {
    return (
      <>
        <Button
          variant="outlined"
          size="small"
          startIcon={<PhotoTwoToneIcon />}
          component="label"
          margin="dense"
          disabled
        >
          Select
          <input type="file" hidden />
        </Button>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          sx={{ marginY: "12px" }}
          disabled
        />
        <Button disabled variant="outlined" size="small">
          Add <AddBoxTwoToneIcon />
        </Button>
      </>
    );
  };

  const toolInputBox = () => {
    return (
      <>
        <Button
          variant="outlined"
          size="small"
          startIcon={<PhotoTwoToneIcon />}
          component="label"
          margin="dense"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
        >
          Select
          <input type="file" hidden />
        </Button>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          sx={{ marginY: "12px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleSend} variant="outlined" size="small">
          Add <AddBoxTwoToneIcon />
        </Button>
      </>
    );
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        sx={{
          width: "25%",
          padding: "16px",
          marginTop: "16px",
          maxHeight: "calc(100vh/4)",
        }}
      >
        <Typography variant="body1">System & tools</Typography>
        {toolPending ? toolInputBoxDisabled() : toolInputBox()}
      </Card>

      {tools && tools.length > 0
        ? tools.map((item) => (
            <Card
              key={item._id}
              sx={{
                width: "calc(100%/6)",
                padding: "16px",
                marginTop: "16px",
                maxHeight: "calc(100vh/4)",
                marginLeft: "12px",
              }}
            >
              <Typography variant="body1">{item.name}</Typography>
              <img
                src={item.image}
                alt=""
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              />
            </Card>
          ))
        : null}
    </Box>
  );
};

export default SystemsTools;
