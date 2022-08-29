import Box from "@mui/material/Box";
import { Button, Paper, TextField } from "@mui/material";

const CreateMail = () => {
  return (
    <Box component={Paper} sx={{ padding: "24px" }}>
      <form>
        <TextField
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained">Send</Button>
      </form>
    </Box>
  );
};

export default CreateMail;
