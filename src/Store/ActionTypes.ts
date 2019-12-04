export const CLICK = "CLICK";
export type CLICK = typeof CLICK;

interface ClickAction {
  type: typeof CLICK;
  payload: string;
}

export type MouseActionTypes = ClickAction;
