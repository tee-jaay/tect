import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh/5)",
    justifyContent: "space-between",
  },
  header: {
    backgroundImage: `url("https://picsum.photos/1920/1200")`,
    backgroundPosition: "center",
    height: "calc(100vh/5)",
    marginBottom: "16px",
  },
  avatar: {
    marginTop: "20px",
    maxHeight: "120px",
    maxWeight: "120px",
  },
  headerName: {
    color: "#fff",
    marginBottom: "10px",
  },
  divider: {
    margin: "12px 0",
  },
  aboutContainer: {
    padding: "12px 16px",
  },
  shareContainer: {
    padding: "12px 16px",
  },
  shareHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postsContainer: {
    padding: "12px 16px",
    marginTop: "12px",
    display: "flex",
  },
  postAvatar: {
    marginRight: "16px",
  },
  contactContainer: {
    marginTop: "12px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactIconName: {
    display: "flex",
  },
  contactIcon: {
    marginRight: "16px",
  },
  contactValue: {},
  socialContainer: {
    marginTop: "12px",
    padding: "12px 16px",
  },
  facebook: {
    color: "#1877f2",
  },
  youtube: {
    color: "#ff0000",
  },
  twitter: {
    color: "#1d9bf0",
  },
  linkedin: {
    color: "#0073b1",
  },
  github: {
    color: "#24292f",
  },
  pinterest: {
    color: "#e60023",
  },
  wallPostFormInput: {
    padding: "8px 0 !important",
  },
  emojiIcon: {
    cursor: "pointer",
  },
}));

export default useStyles;
