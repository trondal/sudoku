import { createStore, combineReducers } from "redux";
import BoardReducer from "./BoardReducer";

const rootReducer = combineReducers({
  board: BoardReducer,
});

export type ISudukoState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export { store };
