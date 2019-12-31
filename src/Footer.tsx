import React from 'react';
import {
  makeStyles,
  createStyles,
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import { Undo, Save, Facebook, Twitter } from '@material-ui/icons';

const useStyles = makeStyles(() =>
  createStyles({
    // offset: theme.mixins.toolbar,
    appBar: {
      top: 'auto',
      bottom: 0
    },
    toolbar: {
      alignSelf: 'center'
    }
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="">
            <Undo />
          </IconButton>
          <IconButton color="inherit" aria-label="">
            <Save />
          </IconButton>
          <IconButton color="inherit" aria-label="">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" aria-label="">
            <Twitter />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
