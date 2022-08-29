import CssBaseline from "@mui/material/CssBaseline";
import { Topbar, Footer } from "../../importExportRoutes.js";
import useStyles from "./styles";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToastContainer position="bottom-center" />

      <CssBaseline />

      <Topbar />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {children}
        <Footer />
      </main>
    </div>
  );
};
export default Layout;
