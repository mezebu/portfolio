import React from "react";
import { Container, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
  },
  icons: {
    fontSize: 100,
  },
});

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          SKILLS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s skills">
              <Card className={classes.card}>
                <div style={{ fontSize: "5em" }}>
                  <i class="fab fa-html5"></i>
                </div>
                <Typography variant="h6">Html</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <span style={{ fontSize: "5em" }}>
                  <i class="fab fa-css3-alt"></i>
                </span>
                <Typography variant="h6">CSS</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <span style={{ fontSize: "5em" }}>
                  {" "}
                  <i class="fab fa-js-square"></i>
                </span>
                <Typography variant="h6">javaScript</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <span style={{ fontSize: "4em" }}>
                  <i class="fab fa-react"></i>
                  <Typography variant="h6">React</Typography>
                </span>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <span style={{ fontSize: "4em" }}>
                  <i class="bi bi-bootstrap"></i>
                </span>
                <Typography variant="h6">Bootstrap</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <span style={{ fontSize: "5em" }}>
                  {" "}
                  <i class="fab fa-git-square"></i>
                </span>
                <Typography variant="h7">Version Control(Git)</Typography>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default AboutPage;
