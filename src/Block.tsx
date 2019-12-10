import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";
import Square from "./Square";
import { BlockType } from "./Interfaces";
import { PuzzleUtils } from "./PuzzleUtils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      width: "calc(100% / 3)",
      height: "calc(100% / 3)",
      borderTop: "2px solid black",
      borderLeft: "2px solid black",
      "&:nth-child(3n)": {
        borderRight: "2px solid black"
      },
      "&:nth-child(7), &:nth-child(8), &:nth-child(9)": {
        borderBottom: "2px solid black"
      },
      boxSizing: "border-box",
      display: "flex",
      flexWrap: "wrap"
    }
  })
);

interface IBlockProps {
  numbers: BlockType;
  blockNumber: number;
}

function Block(props: IBlockProps) {
  const classes = useStyles();

  function getSquares() {
    const items = [];
    for (let index = 0; index < 9; index++) {
      items.push(
        <Square
          id={PuzzleUtils.getId(props.blockNumber, index)}
          digit={props.numbers[index]}
          highlight={false}
          key={index}
        ></Square>
      );
    }
    return items;
  }

  return <div className={classes.block}>{getSquares()}</div>;
}

export default Block;
