import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  root: {
    background: "rgba( 255, 255, 255, 0.25 )",
    "&:hover": {
      background: "rgba(255, 255, 255, 0)",
    },
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    borderRadius: 5,
    fontWeight: 500,
    padding: 5,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  cardHeader: {
    padding: 7,
  },
  cardActions: {
    padding: 5,
  },
  typography: {
    fontSize: 13,
    fontWeight: 500,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150,
  },
  avatar: {
    color: "blue",
    background: "rgba( 255, 255, 255, 0.25 )",
  },
});

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
