import { types } from "../../types";

const initialState = [];

export const alertReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);

    case types.SET_ALERT:
      return [...state, action.payload];
    default:
      return state;
  }
};
