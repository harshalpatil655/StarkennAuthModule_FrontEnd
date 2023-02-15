import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const signup = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  return axios
    .post("http://localhost:8080/signup", data)
    .then((res) => dispatch({ type: SIGNUP_SUCCESS }))
    .catch((err) => dispatch({ type: SIGNUP_FAILURE }));
};

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post("http://localhost:8080/login", data)
    .then((res) => {
      console.log(res);
      return dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: LOGIN_FAILURE });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
