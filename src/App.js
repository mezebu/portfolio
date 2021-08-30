import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, Container } from "@material-ui/core";
import "normalize-css";
import "animate.css";

import { Header, Home, Skills, Contact, ProjectCards } from "./components";

import { theme, useStyles } from "./styles";

import styles from "./App.module.css";

const App = () => {
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
};

export default App;
