import { types } from "../../types";

export const setAlert = (msg, type, timeout = 5000) => {
  const id = Math.floor(Math.random() * 1000000);
  return {
    type: types.SET_ALERT,
    payload: { msg, type, id },
  };

  setTimeout(() => ({ type: types.REMOVE_ALERT, payload: id }), timeout);
};
