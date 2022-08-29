import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Alert, Box, Button } from "@mui/material";
import { Snackbar } from "@mui/material";

const ConnectWallet = ({ authenticate }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const walletConnect = (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      setOpen(true);
    } else {
      authenticate({
        signingMessage: "Connect wallet to this app?",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Metamask is not found. Please install & activate Metamask.
        </Alert>
      </Snackbar>
      <Button
        type="submit"
        onClick={walletConnect}
        variant="contained"
        startIcon={<AccountBalanceWalletIcon />}
        color="info"
        data-cy="connect-btn"
      >
        Connect
      </Button>
    </Box>
  );
};

export default ConnectWallet;
