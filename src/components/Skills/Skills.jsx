import React from "react";
import { Container, Grid, Card, Typography } from "@material-ui/core";

import { skillUp, skillDown } from "./Skill";

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
          {skillDown.map(({ title, icon }) => (
            <Grid item xs={6} sm={6} md={3} key={title}>
              <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
                <Card className={classes.card}>
                  {icon}
                  <Typography variant="h6">{title}</Typography>
                </Card>
              </div>
            </Grid>
          ))}

          {skillUp.map(({ title, icon }) => (
            <Grid item xs={6} sm={6} md={3} key={title}>
              <div className="animate__animated animate__fadeInUp animate__delay-1s">
                <Card className={classes.card}>
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Skills;
