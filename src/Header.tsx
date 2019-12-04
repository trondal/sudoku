import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MoodIcon from "@material-ui/icons/Mood";

const useStyles = makeStyles(() => ({
  typography: {
    flexGrow: 1,
    alignSelf: "center"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MoodIcon />
        </IconButton>
        <Typography align="center" className={classes.typography} variant="h6">
          Sudoku by trondal
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
