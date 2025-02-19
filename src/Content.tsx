import { makeStyles, createStyles } from "@mui/styles";
import Puzzle from "./Puzzle";
import PickerLine from "./PickerLine";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: "flex",
      flex: "1 1 auto",
      flexDirection: "row",
    },
    row: {
      flex: "1 1 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderBottom: "none",
      height: "100%",
    },
    left: {
      backgroundColor: "powderblue",
    },
    center: {
      border: "1px solid black",
      flexDirection: "column",
    },
    right: {
      backgroundColor: "powderblue",
    },
  })
);

function Content() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <div className={`${classes.row} ${classes.left}`}>Left</div>
      <div className={`${classes.row} ${classes.center}`}>
        <Puzzle />
        <PickerLine />
      </div>
      <div className={`${classes.row} ${classes.right}`}>Right</div>
    </div>
  );
}

export default Content;
