import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
    color: "black",
    fontWeight: "700",
  },
  toolbar: {
    padding: 0,
  },
  headerOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  headerLinks: {
    color: "inherit",
  },
  image: {
    width: "100px",
    borderRadius: "5px",
  },
}));
