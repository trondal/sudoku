import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";
import Square from "./Square";
import { BlockType } from "./Interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      width: "calc(100% / 3)",
      height: "calc(100% / 3)",
      border: "1px solid black",
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap"
    }
  })
);

interface IBlockProps {
  numbers: BlockType;
}

function Block(props: IBlockProps) {
  const classes = useStyles();
  function getSquares() {
    const items = [];
    for (let index = 0; index < 9; index++) {
      items.push(<Square key={index} digit={props.numbers[index]}></Square>);
    }
    return items;
  }

  return <div className={classes.block}>{getSquares()}</div>;
}

export default Block;
