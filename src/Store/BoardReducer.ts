import { CLICK, MouseActionTypes } from "./ActionTypes";
import { IBoardState } from "./../Interfaces";

const initialState: IBoardState = {
  puzzle: [
    [5, 3, 0, 6, 0, 0, 0, 9, 8],
    [0, 7, 0, 1, 9, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 4, 0, 0, 7, 0, 0],
    [0, 6, 0, 8, 0, 3, 0, 2, 0],
    [0, 0, 3, 0, 0, 1, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 1, 9, 0, 8, 0],
    [2, 8, 0, 0, 0, 5, 0, 7, 9]
  ]
};

export function BoardReducer(
  state = initialState,
  action: MouseActionTypes
): IBoardState {
  switch (action.type) {
    case CLICK:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default BoardReducer;
