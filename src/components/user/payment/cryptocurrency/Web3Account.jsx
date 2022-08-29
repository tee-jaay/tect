import ConnectWallet from "./ConnectWallet";
import WalletInfo from "./WalletInfo";

const Web3Account = ({
  isAuthenticated,
  authenticate,
  user,
  logout,
  isLoggingOut,
}) => {
  if (!isAuthenticated || !user) {
    return <ConnectWallet authenticate={authenticate} />;
  }
  return <WalletInfo user={user} logout={logout} isLoggingOut={isLoggingOut} />;
};
export default Web3Account;
