import { CHECKED, MouseActionTypes, HIGHLIGHT, SET_DIGIT } from "./ActionTypes";
import { IBoardState, PuzzleType } from "./../Interfaces";
import { PuzzleUtils } from "../PuzzleUtils";

const initialState: IBoardState = {
  ident: {
    id: -1,
    digit: -1
  },
  puzzle: [
    [0, 8, 0, 0, 2, 3, 9, 0, 1],
    [0, 0, 0, 0, 0, 5, 8, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [8, 0, 6, 3, 0, 0, 0, 9, 0],
    [3, 1, 0, 9, 0, 0, 0, 0, 4],
    [0, 7, 0, 0, 6, 2, 0, 3, 8],
    [5, 0, 0, 0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 6],
    [7, 0, 0, 0, 4, 0, 0, 9, 0]
  ],
  highlighted: []
};

export function BoardReducer(
  state = initialState,
  action: MouseActionTypes
): IBoardState {
  switch (action.type) {
    case CHECKED:
      return {
        ...state,
        ident: action.payload
      };
    case HIGHLIGHT:
      const uniqueArray = PuzzleUtils.getAllHighLighted(
        state.puzzle,
        action.payload
      );
      return {
        ...state,
        highlighted: uniqueArray
      };
    case SET_DIGIT:
      const newPuzzle = Object.assign([...state.puzzle], {
        [action.payload.position.row]: Object.assign(
          [...state.puzzle[action.payload.position.row]],
          {
            [action.payload.position.column]: action.payload.digit
          }
        )
      }) as PuzzleType;
      return {
        ...state,
        puzzle: newPuzzle
      };
    default:
      return state;
  }
}

export default BoardReducer;
