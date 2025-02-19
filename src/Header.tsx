import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import MoodIcon from "@mui/icons-material/Mood";

const useStyles = makeStyles(() => ({
  typography: {
    flexGrow: 1,
    alignSelf: "center",
  },
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
