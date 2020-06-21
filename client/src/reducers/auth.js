import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  token: localStorage.getItem("token"),
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        token: null,
      };
    default:
      return state;
  }
}
