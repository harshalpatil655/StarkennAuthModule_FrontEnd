import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  isLogin: false,
  token: localStorage.getItem("token") || "",
  user_type: localStorage.getItem("user_type") || "",
  user_id: localStorage.getItem("user_id") || "",
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user_type", payload.user_type);
      localStorage.setItem("user_id", payload.user_id);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isLogin: true,
        token: payload.token,
        user_type: payload.user_type,
        user_id: payload.user_id,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogin: false,
      };
    }
    default: {
      return state;
    }
  }
};
