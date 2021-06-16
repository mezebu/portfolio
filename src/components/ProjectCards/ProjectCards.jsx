import React from "react";
import { Grid } from "@material-ui/core";
import TaskCard from "../TaskCard/TaskCard";
import { Projects } from "./Projects";

const ProjectCards = () => {
  return (
    <Grid container spacing={1} maxWidth="md">
      {Projects.map(
        ({ avatar, title, imgSrc, description, pageUrl, codeUrl }) => (
          <Grid item xs={12} sm={6} md={4} key={avatar}>
            <TaskCard
              avatar={avatar}
              title={title}
              imgSrc={imgSrc}
              description={description}
              pageUrl={pageUrl}
              codeUrl={codeUrl}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default ProjectCards;
