import React from "react";
import Block from "./Block";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { BlockType, IBoardState } from "./Interfaces";
import { ISudukoState } from "./Store/configureStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    puzzle: {
      //border: "1px solid red",
      margin: "0 auto",
      width: "100vw",
      maxWidth: "60vh",
      height: "100vw",
      maxHeight: "60vh",
      display: "flex",
      flexWrap: "wrap"
    }
  })
);

function Puzzle(props: IBoardState) {
  console.log(props);
  const classes = useStyles();

  function getBlocks() {
    const items = [];
    for (let index = 0; index < 9; index++) {
      const numbers: BlockType = props.puzzle[index];
      items.push(<Block key={index} numbers={numbers} />);
    }
    return items;
  }
  return <div className={classes.puzzle}>{getBlocks()}</div>;
}

const mapStateToProps = (store: ISudukoState): IBoardState => {
  return {
    puzzle: store.board.puzzle
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);
