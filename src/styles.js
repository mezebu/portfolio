import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    background: "#e5e5e5",
  },
});

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "Nunito"].join(","),
  },
  palette: {
    background: {
      default: "#e5e5e5",
    },
  },
});
