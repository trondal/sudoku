import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Undo from "@mui/icons-material/Undo";
import Save from "@mui/icons-material/Save";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { makeStyles, createStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles(() =>
  createStyles({
    // offset: theme.mixins.toolbar,
    appBar: {
      top: "auto",
      bottom: 0,
    },
    toolbar: {
      alignSelf: "center",
    },
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
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
  );
}
