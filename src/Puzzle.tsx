import Block from "./Block";
import { makeStyles, createStyles } from "@mui/styles";
import { connect } from "react-redux";
import { BlockType, BoardState } from "./Interfaces";
import { ISudukoState } from "./Store/configureStore";
import { checkedAction } from "./Store/ActionCreators";

const useStyles = makeStyles(() =>
  createStyles({
    puzzle: {
      // border: "1px solid red",
      margin: "0 auto",
      width: "100vw",
      maxWidth: "60vh",
      height: "100vw",
      maxHeight: "60vh",
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

function Puzzle(props: any) {
  const classes = useStyles();

  function getBlocks() {
    const items = [];
    for (let index = 0; index < 9; index += 1) {
      const numbers: BlockType = props.puzzle[index];
      items.push(
        <Block blockNumber={index + 1} key={index} numbers={numbers} />
      );
    }
    return items;
  }
  return <div className={classes.puzzle}>{getBlocks()}</div>;
}

/* TODO use Partial, checked props is not neccecary here */
const mapStateToProps = (store: ISudukoState): Pick<BoardState, "puzzle"> => ({
  puzzle: store.board.puzzle,
});

const mapDispatchToProps = {
  checkedAction: typeof checkedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);
