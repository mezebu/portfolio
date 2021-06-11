import React from "react";
import { Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";
import GamersImage from "../assets/Gamers.png";
import landify from "../assets/landify.png";
import weather from "../assets/weather.png";
import calculator from "../assets/Calculator.png";
import todo from "../assets/todo.png";
import scoreCard from "../assets/scoreCard.png";

const ProjectCards = () => {
  return (
    <Grid container spacing={1} maxWidth="md">
      <Grid item xs={12} sm={6} md={4}>
        <TaskCard
          avatar="W"
          title="Weather App"
          imgSrc={weather}
          description="A weather web-app that collects weather information ."
          pageUrl="https://weather-app-16dfa.web.app/"
          codeUrl="https://github.com/Mezebu/weather-app"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TaskCard
          avatar="G"
          title="Gamers"
          imgSrc={GamersImage}
          description="A web app that handles sign in and registration sessions."
          codeUrl="https://github.com/Mezebu/gamers"
          pageUrl="https://gamers-fb7da.firebaseapp.com/"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TaskCard
          avatar="C"
          title="Calculator"
          imgSrc={calculator}
          description="Score card app is a list of football scores built using react "
          pageUrl="https://mezebu.github.io/calculator/"
          codeUrl="https://github.com/Mezebu/calculator"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TaskCard
          avatar="T"
          title="Todo-List"
          imgSrc={todo}
          description="Score card app is a list of football scores built using react "
          pageUrl="https://todo-list-b03b4.web.app/"
          codeUrl="https://github.com/Mezebu/todo-list"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TaskCard
          avatar="L"
          title="Landify"
          imgSrc={landify}
          description="Score card app is a list of football scores built using react "
          pageUrl="https://landify-1e603.web.app/"
          codeUrl="https://github.com/Mezebu/landify"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TaskCard
          avatar="S"
          title="Scored Card"
          imgSrc={scoreCard}
          description="Score card is a list of football scores built using react."
          codeUrl="https://codesandbox.io/s/festive-nobel-gjt1p"
          pageUrl="https://gjt1p.csb.app/"
        />
      </Grid>
    </Grid>
  );
};

export default ProjectCards;
