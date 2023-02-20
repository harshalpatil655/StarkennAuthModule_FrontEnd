import * as types from "./actionTypes";

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
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOGIN_SUCCESS: {
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

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
