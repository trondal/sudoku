import { createStyles, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { BoardState } from './Interfaces';
import { checkedAction, highlightAction } from './Store/ActionCreators';
import { ISudukoState } from './Store/configureStore';

const useStyles = makeStyles(() =>
  createStyles({
    square: {
      width: 'calc(100% / 3)',
      height: 'calc(100% / 3)',
      border: '0.2px solid #bfc5d2',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    checked: {
      backgroundColor: '#c4dbfb'
    },
    highlight: {
      backgroundColor: '#e2e6ec'
    },
    num: {
      fontSize: 'calc(1.8vw + 1.8vh + 0.8vmin)',
      fontWeight: 300
    }
  })
);

interface OwnProps {
  id: number;
  digit: number;
  highlight: boolean;
}

type ISquareProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps;

function Square(props: ISquareProps) {
  const classes: Record<
    'square' | 'checked' | 'num' | 'highlight',
    string
  > = useStyles();

  return (
    <div
      onClick={() => {
        props.checkedAction(props.id, props.digit);
        props.highlightAction(props.id, props.digit);
      }}
      className={`${classes.square} ${
        props.ident.id === props.id ? classes.checked : ''
      } ${props.highlight ? classes.highlight : ''}
        ${props.highlighted.includes(props.id) ? classes.highlight : ''}
      `}>
      <Tooltip title={props.id} arrow>
        <div className={classes.num}>
          {props.digit !== 0 ? props.digit : ''}
        </div>
      </Tooltip>
    </div>
  );
}

const mapStateToProps = (
  store: ISudukoState
): Pick<BoardState, 'ident' | 'highlighted'> => ({
    ident: store.board.ident,
    highlighted: store.board.highlighted
  });

const mapDispatchToProps = {
  checkedAction,
  highlightAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
