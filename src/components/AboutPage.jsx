import React from "react";
import { Container, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  SiMaterialUi,
  BsFillBootstrapFill,
  FaGitSquare,
  AiFillHtml5,
  DiCss3,
  IoLogoJavascript,
  FaReact,
  DiJqueryLogo,
} from "react-icons/all";

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
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          SKILLS
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <AiFillHtml5 size="4em" />
                <Typography variant="h6">Html</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <DiCss3 size="4em" />
                <Typography variant="h6">CSS</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <IoLogoJavascript size="4em" />
                <Typography variant="h6">javaScript</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <FaReact size="4em" />
                <Typography variant="h6">React</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <BsFillBootstrapFill size="4em" />

                <Typography variant="h6">Bootstrap</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <FaGitSquare size="4em" />

                <Typography variant="h6">Version Control(Git)</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <SiMaterialUi size="4em" />

                <Typography variant="h6">Material UI</Typography>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <DiJqueryLogo size="4em" />

                <Typography variant="h6">jQuery</Typography>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default AboutPage;
