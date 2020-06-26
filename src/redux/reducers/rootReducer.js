import { combineReducers } from "redux";
import { playerReducers } from "./playersReducer";
import { contactReducers } from "./contactsReducer";
import { authReducers } from "./authReducer";
import { alertReducers } from "./alertReducer.js";

export const rootReducer = combineReducers({
  players: playerReducers,
  contacts: contactReducers,
  auth: authReducers,
  alerts: alertReducers,
});
