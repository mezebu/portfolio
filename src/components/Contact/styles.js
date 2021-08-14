import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
  },
  card: {
    background: "rgba(255, 255, 255, 0.20)",
    "&:hover": {
      background: "rgba(255, 255, 255, 0)",
    },
    boxShadow:
      "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(2px)",
    webkitBackdropFilter: "blur(2px)",
    borderRadius: 3,
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
  },
  icons: {
    fontSize: 100,
  },
  text: {
    borderBottom: "3px solid red",
    width: "10rem",
    margin: "0 auto",
  },
});
