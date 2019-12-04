import { CLICK, MouseActionTypes } from "./ActionTypes";

export function click(text: string): MouseActionTypes {
  return { type: CLICK, payload: text };
}
