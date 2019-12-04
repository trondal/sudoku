import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    square: {
      width: "calc(100% / 3)",
      height: "calc(100% / 3)",
      border: "0.2px solid lightgray",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    num: {
      fontSize: "calc(1.8vw + 1.8vh + 0.8vmin)",
      fontWeight: 300
    }
  })
);

interface ISquareProps {
  digit: number;
}

function Square(props: ISquareProps) {
  const classes = useStyles();
  return (
    <div className={classes.square}>
      <div className={classes.num}>{props.digit !== 0 ? props.digit : ""}</div>
    </div>
  );
}

export default Square;
