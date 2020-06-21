import { types } from "../types";

export const getplayers = (player) => {
  return { type: types.GET_PLAYER, payload: { player } };
};

export const addPlayer = (player) => {
  return {
    type: types.ADD_PLAYER,
    payload: player,
  };
};
