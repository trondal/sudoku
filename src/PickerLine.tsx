import React from 'react';
import Picker from './Picker';
import { makeStyles, createStyles } from '@material-ui/styles';
import { ISudukoState } from './Store/configureStore';
import { BoardState } from './Interfaces';
import { connect } from 'react-redux';
import { checkedAction, setDigitAction } from './Store/ActionCreators';

const useStyles = makeStyles(() =>
  createStyles({
    pickerLine: {
      margin: '1rem auto',
      width: '100vw',
      maxWidth: '60vh',
      height: 'calc(60vw / 9)',
      maxHeight: 'calc(60vh / 9)',
      display: 'flex'
    }
  })
);

type IPickerLineProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps 

function PickerLine(props: IPickerLineProps) {
  /* const onSquareClick = (ident: PuzzlePosition) => {
    console.log('onSquareClick')
  }; */

  const classes = useStyles();
  return (
    <div className={classes.pickerLine}>
      <Picker highlight={props.ident.digit === 0} digit={1} />
      <Picker highlight={props.ident.digit === 0} digit={2} />
      <Picker highlight={props.ident.digit === 0} digit={3} />
      <Picker highlight={props.ident.digit === 0} digit={4} />
      <Picker highlight={props.ident.digit === 0} digit={5} />
      <Picker highlight={props.ident.digit === 0} digit={6} />
      <Picker highlight={props.ident.digit === 0} digit={7} />
      <Picker highlight={props.ident.digit === 0} digit={8} />
      <Picker highlight={props.ident.digit === 0} digit={9} />
    </div>
  );
}

const mapStateToProps = (store: ISudukoState): Pick<BoardState, 'ident'> => ({
    ident: store.board.ident
  });

const mapDispatchToProps = {
  checkedAction,
  setDigitAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PickerLine);
