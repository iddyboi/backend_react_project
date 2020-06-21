import { combineReducers } from "redux";
import { playerReducers } from "./playersReducer";

export const rootReducer = combineReducers({
  players: playerReducers,
});
