import { types } from "../../types";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  error: null,
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case types.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
