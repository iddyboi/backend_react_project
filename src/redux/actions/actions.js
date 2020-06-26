import { types } from "../types";
import axios from "axios";

export const getplayers = (player) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5500/api/players")
      .then((res) =>
        dispatch({
          type: types.GET_PLAYER,
          payload: res.data,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addPlayer = (player) => {
  return {
    type: types.ADD_PLAYER,
    payload: player,
  };
};
