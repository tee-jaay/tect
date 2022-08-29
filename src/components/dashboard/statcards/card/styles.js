import { makeStyles } from "@mui/styles";

import green from "@mui/material/colors/green";
import blue from "@mui/material/colors/blue";
import yellow from "@mui/material/colors/yellow";
import pink from "@mui/material/colors/pink";

const cardGreen = green[100];
const cardBlue = blue[100];
const cardYellow = yellow[100];
const cardPink = pink[100];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "8px",
  },
  loaderRoot: {
    backgroundColor: "honeydew",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  cardItem: {
    borderRadius: "4px",
    padding: "10px",
    textAlign: "center",
  },
  cardItemGreen: {
    backgroundColor: `${cardGreen} !important`,
  },
  cardItemBlue: {
    backgroundColor: `${cardBlue} !important`,
  },
  cardItemYellow: {
    backgroundColor: `${cardYellow} !important`,
  },
  cardItemPink: {
    backgroundColor: `${cardPink} !important`,
  },
  cardItemIconWrapper: {
    margin: "20px auto 20px auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: "72px",
    height: "72px",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
  },
  cardItemTitle: {
    fontSize: "1.2rem !important",
  },
  cardItemSubTitle: {
    fontSize: "0.7rem !important",
  },
}));

export default useStyles;
