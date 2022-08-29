import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fdfaf7',
  },
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  aboutContainer: {
    margin: "100px 0 50px 0",
    backgroundColor: "white",
    paddingTop: "96px",
    paddingBottom: "96px",
  },
  about: {
    textAlign: "center",
    padding: "0 15%",
  },
  featureContainer: {
    paddingTop: "24px",
    paddingBottom: "64px",
  },
  sectionTitle: {
    textAlign: "center",
    padding: "40px 0 90px",
  },
  featureTitle: {
    textAlign: "center",
    padding: "20px 0",
  },
  cardContainer: {},
  techContainer: {
    backgroundColor: "white",
    paddingTop: "64px",
    paddingBottom: "96px",
  },
  systemToolsContainer: {
    padding: "96px 0",
  },
  systemTools: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  serversContainer: {
    paddingTop: "96px ",
    textAlign: "center",
  },
}));

export default useStyles;
