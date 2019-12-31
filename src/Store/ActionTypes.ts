import { SquareIdentifier, PuzzlePosition } from '../Interfaces';

export const CHECKED = 'CHECKED';
export type CHECKED = typeof CHECKED;

export const HIGHLIGHT = 'HIGHLIGHT';
export type HIGHLIGHT = typeof HIGHLIGHT;

export const SET_DIGIT = 'SET_DIGIT';
export type SET_DIGIT = typeof SET_DIGIT;

export interface CheckedAction {
  type: typeof CHECKED;
  payload: SquareIdentifier;
}

export interface HighLightAction {
  type: typeof HIGHLIGHT;
  payload: SquareIdentifier;
}

export interface SetDigitAction {
  type: typeof SET_DIGIT;
  payload: {
    position: PuzzlePosition;
    digit: number;
  };
}

export type MouseActionTypes = CheckedAction | HighLightAction | SetDigitAction;
