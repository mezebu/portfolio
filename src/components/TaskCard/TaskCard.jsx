import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  Avatar,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  CardHeader,
  Card,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

const TaskCard = ({ title, description, imgSrc, codeUrl, pageUrl, avatar }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        title={title}
      />
      <CardContent className={classes.root}>
        <CardMedia className={classes.media} image={imgSrc} title={title} />
        <Typography
          variant="body2"
          component="p"
          className={classes.typography}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          variant="outlined"
          color="default"
          size="small"
          href={pageUrl}
          target="_blank"
        >
          Live Demo
        </Button>
        <Button
          variant="outlined"
          color="default"
          size="small"
          href={codeUrl}
          target="_blank"
        >
          Code
          <GitHubIcon
            style={{ height: "15px", width: "15px", paddingLeft: "5px" }}
          />
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
