import { Box } from "@mui/system";

const Copyright = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", py: "24px" }}>
      <Box sx={{ textAlign: "center" }} data-cy="footer-copyright">
        Tee Jaay &copy; {new Date().getFullYear()}
      </Box>
    </Box>
  );
};

export default Copyright;
