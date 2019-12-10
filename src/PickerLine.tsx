import React from "react";
import Picker from "./Picker";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { ISudukoState } from "./Store/configureStore";
import { IBoardState, PuzzlePosition } from "./Interfaces";
import { connect } from "react-redux";
import { checkedAction, setDigitAction } from "./Store/ActionCreators";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pickerLine: {
      margin: "1rem auto",
      width: "100vw",
      maxWidth: "60vh",
      height: "calc(60vw / 9)",
      maxHeight: "calc(60vh / 9)",
      display: "flex"
    }
  })
);

interface OwnProps {}

type IPickerLineProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps;

function PickerLine(props: IPickerLineProps) {
  const onSquareClick = (ident: PuzzlePosition) => {};

  const classes = useStyles();
  return (
    <div className={classes.pickerLine}>
      <Picker highlight={props.ident.digit === 0} digit={1}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={2}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={3}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={4}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={5}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={6}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={7}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={8}></Picker>
      <Picker highlight={props.ident.digit === 0} digit={9}></Picker>
    </div>
  );
}

const mapStateToProps = (store: ISudukoState): Pick<IBoardState, "ident"> => {
  return {
    ident: store.board.ident
  };
};

const mapDispatchToProps = {
  checkedAction: checkedAction,
  setDigitAction: setDigitAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PickerLine);
