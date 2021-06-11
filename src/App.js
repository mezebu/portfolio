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

import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ProjectCards from "./components/ProjectCards.jsx";
import "./App.css";

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
          <div className="App">
            <Container maxWidth="lg">
              <Header />

              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/projects" exact component={ProjectCards} />
                <Route path="/contact" exact component={ContactPage} />
              </Switch>
            </Container>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
