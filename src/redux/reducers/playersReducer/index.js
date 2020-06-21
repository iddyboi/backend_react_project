import { types } from "../../types";

const initialState = {
  players: [{ name: "frank", age: 21, description: "fast player" }],
};

export const playerReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYER:
      return {
        ...state,
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
