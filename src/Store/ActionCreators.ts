import { CHECKED, MouseActionTypes, HIGHLIGHT, SET_DIGIT } from './ActionTypes';
import { PuzzlePosition } from '../Interfaces';

export function checkedAction(id: number, digit: number): MouseActionTypes {
  return {
    type: CHECKED,
    payload: {
      id,
      digit
    }
  };
}

export function highlightAction(id: number, digit: number): MouseActionTypes {
  return { type: HIGHLIGHT, payload: { id, digit } };
}

export function setDigitAction(
  position: PuzzlePosition,
  digit: number
): MouseActionTypes {
  return {
    type: SET_DIGIT,
    payload: {
      position,
      digit
    }
  };
}
