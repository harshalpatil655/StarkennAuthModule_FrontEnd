import * as types from "./actionTypes";
import axios from "axios";

//////////////////Adding Data Of User/////////////////////
export const signup = (data) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });

  return axios
    .post("http://localhost:8080/signup", data)
    .then((res) => dispatch({ type: types.SIGNUP_SUCCESS }))
    .catch((err) => dispatch({ type: types.SIGNUP_FAILURE }));
};

////////////////////////Login for Admin/Customer /////////////////////
export const login = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post("http://localhost:8080/login", data)
    .then((res) => {
      console.log(res);
      return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};
