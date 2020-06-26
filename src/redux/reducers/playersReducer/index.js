import { types } from "../../types";

const initialState = {
  players: [],
};

export const playerReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYER:
      return {
        ...state,
        players: action.payload,
      };

    case types.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload],
      };

    default:
      return state;
  }
};
