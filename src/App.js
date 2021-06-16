import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import "normalize-css";
import "animate.css";
import { Header, Home, Skills, Contact, ProjectCards } from "./components";

import styles from "./App.module.css";

const useStyles = makeStyles({
  root: {
    background: "#e5e5e5",
  },
});

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Montserrat", "Nunito"].join(","),
    },
    palette: {
      background: {
        default: "#e5e5e5",
      },
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.background}>
          <div className={styles.App}>
            <Container>
              <Header />

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={Skills} />
                <Route path="/projects" exact component={ProjectCards} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </Container>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
