import { types } from "../../types";
import axios from "axios";

export const success = (response) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: response.data,
  };
};

export const register = (FormData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post("/api/users", FormData, config);
    dispatch(success(response));
  } catch (error) {
    console.error(error);
  }
};
