import { useEffect, useState } from "react";
import Moralis from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { Box, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

const WalletInfo = ({ logout, isLoggingOut, user }) => {
  const Web3Api = useMoralisWeb3Api();
  const [ethBalance, setEthBalance] = useState(0);
  // eslint-disable-next-line
  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
        address: user.get("ethAddress"),
      })
      .catch((err) => console.error(err));
    if (result.balance) {
      setEthBalance(Moralis.Units.FromWei(result.balance));
    }
  };

  useEffect(() => {
    fetchNativeBalance();
  }, [fetchNativeBalance]);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography component="h6" variant="h6">
          Your wallet
        </Typography>
        <Button
          onClick={logout}
          variant="contained"
          startIcon={<ExitToAppIcon />}
          disabled={isLoggingOut}
          color="warning"
          data-cy="disconnect-btn"
        >
          Disconnect
        </Button>
      </Box>

      <Divider sx={{ margin: "12px 0" }} />

      <Typography variant="div" component="p">
        <strong>id</strong> : {user && user.id}
      </Typography>
      <Typography variant="div" component="p">
        <strong>Address</strong>: {user && user.get("ethAddress")}
      </Typography>
      <Typography variant="div" component="p">
        <strong>Balance</strong>: {ethBalance ? ethBalance : "..."}
      </Typography>
    </Box>
  );
};

export default WalletInfo;
