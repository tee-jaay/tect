import { useState } from "react";
import PayPalButton from "react-paypal-smart-button";
import { Alert, Box, Snackbar } from "@mui/material";

const Paypal = ({ amount }) => {
  const handlePaypalSuccess = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <PayPalButton
        showSpinner={true}
        price={amount && parseFloat(amount)}
        description="Hire for job"
        clientId={process.env.REACT_APP_PAYPAL_APP_CLIENT_ID}
        currency="USD"
        paySubmit={handlePaypalSuccess}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Payment process success!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Paypal;
