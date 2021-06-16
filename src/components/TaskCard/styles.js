import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    background: "rgba( 255, 255, 255, 0.25 )",
    "&:hover": {
      background: "rgba(255, 255, 255, 0)",
    },
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    borderRadius: 5,
    fontWeight: 500,
    padding: 5,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  cardHeader: {
    padding: 7,
  },
  cardActions: {
    padding: 5,
  },
  typography: {
    fontSize: 13,
    fontWeight: 500,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150,
  },
  avatar: {
    color: "blue",
    background: "rgba( 255, 255, 255, 0.25 )",
  },
});
