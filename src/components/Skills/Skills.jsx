import React from "react";
import { Container, Grid, Card, Typography } from "@material-ui/core";
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

import useStyles from "./styles";

const Skills = () => {
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

                <Typography variant="h6">Version Control</Typography>
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

export default Skills;
