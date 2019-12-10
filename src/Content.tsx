import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core";
import Puzzle from "./Puzzle";
import PickerLine from "./PickerLine";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      flex: "1 1 auto",
      flexDirection: "row"
    },
    row: {
      flex: "1 1 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderBottom: "none",
      height: "100%"
    },
    left: {
      backgroundColor: "cyan"
    },
    center: {
      border: "1px solid black",
      flexDirection: "column"
    },
    right: {
      backgroundColor: "cyan"
    }
  })
);

function Content() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.box}>
        <div className={`${classes.row} ${classes.left}`}>Left</div>
        <div className={`${classes.row} ${classes.center}`}>
          <Puzzle />
          <PickerLine />
        </div>
        <div className={`${classes.row} ${classes.right}`}>Right</div>
      </div>
    </>
  );
}

export default Content;
