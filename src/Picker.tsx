import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";
import { SetDigitAction } from "./Store/ActionTypes";
import { PuzzlePosition, IBoardState } from "./Interfaces";
import { ISudukoState } from "./Store/configureStore";
import { setDigitAction } from "./Store/ActionCreators";
import { connect } from "react-redux";
import { PuzzleUtils } from "./PuzzleUtils";
import { StarRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    picker: {
      width: "calc(100% / 9)",
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
      borderLeft: "1px solid black",
      "&:last-of-type": {
        borderRight: "1px solid black"
      },
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    num: {
      fontSize: "calc(1.8vw + 1.8vh + 0.8vmin)",
      fontWeight: 300
    },
    highlight: {
      backgroundColor: "#c4dbfb"
    }
  })
);

interface OwnProps {
  digit: number;
  highlight: boolean;
}

type IPickerProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps;

function Picker(props: IPickerProps) {
  const classes = useStyles();
  return (
    <div
      onClick={() => {
        const position = PuzzleUtils.getPositionById(props.ident.id);
        props.setDigitAction(position, props.digit);
      }}
      className={`${classes.picker} ${
        props.highlight ? classes.highlight : ""
      }`}
    >
      <div className={classes.num}>{props.digit}</div>
    </div>
  );
}

const mapStateToProps = (
  store: ISudukoState
): Pick<IBoardState, "puzzle" | "ident"> => {
  return {
    puzzle: store.board.puzzle,
    ident: store.board.ident
  };
};

const mapDispatchToProps = {
  setDigitAction: setDigitAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
