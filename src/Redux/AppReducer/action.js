import axios from "axios";
import {
  ADD_CUSTOMER_FAILURE,
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_DEVICE_FAILURE,
  ADD_DEVICE_REQUEST,
  ADD_DEVICE_SUCCESS,
  ADD_MASTERCUSTOMER_FAILURE,
  ADD_MASTERCUSTOMER_REQUEST,
  ADD_MASTERCUSTOMER_SUCCESS,
  ADD_VEHICLE_FAILURE,
  ADD_VEHICLE_REQUEST,
  ADD_VEHICLE_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_DEVICE_FAILURE,
  DELETE_DEVICE_REQUEST,
  DELETE_DEVICE_SUCCESS,
  DELETE_VEHICLE_FAILURE,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_SUCCESS,
  EDIT_CUSTOMER_FAILURE,
  EDIT_CUSTOMER_REQUEST,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_MASTERCUSTOMER_FAILURE,
  EDIT_MASTERCUSTOMER_REQUEST,
  EDIT_MASTERCUSTOMER_SUCCESS,
  EDIT_VEHICLE_FAILURE,
  EDIT_VEHICLE_REQUEST,
  EDIT_VEHICLE_SUCCESS,
  GETBYID_CUSTOMER_FAILURE,
  GETBYID_CUSTOMER_REQUEST,
  GETBYID_CUSTOMER_SUCCESS,
  GETBYID_DEVICE_FAILURE,
  GETBYID_DEVICE_REQUEST,
  GETBYID_DEVICE_SUCCESS,
  GETBYID_MASTERCUSTOMER_FAILURE,
  GETBYID_MASTERCUSTOMER_REQUEST,
  GETBYID_MASTERCUSTOMER_SUCCESS,
  GETBYID_VEHICLE_FAILURE,
  GETBYID_VEHICLE_REQUEST,
  GETBYID_VEHICLE_SUCCESS,
  GET_CUSTOMERVEHICLE_FAILURE,
  GET_CUSTOMERVEHICLE_REQUEST,
  GET_CUSTOMERVEHICLE_SUCCESS,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  GET_DEVICE_FAILURE,
  GET_DEVICE_REQUEST,
  GET_DEVICE_SUCCESS,
  GET_ECU_FAILURE,
  GET_ECU_REQUEST,
  GET_ECU_SUCCESS,
  GET_IoT_FAILURE,
  GET_IoT_REQUEST,
  GET_IoT_SUCCESS,
  GET_VEHICLE_FAILURE,
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_SUCCESS,
  UPDATE_DEVICE_FAILURE,
  UPDATE_DEVICE_REQUEST,
  UPDATE_DEVICE_SUCCESS,
} from "./actionTypes";

const token = localStorage.getItem("token");

/////////////////////////Device Actions ////////////////////////////////////////

export const getData = () => async (dispatch) => {
  dispatch({ type: GET_DEVICE_REQUEST });

  return await axios
    .get("http://localhost:8080/devices/getall", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GET_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: GET_DEVICE_FAILURE });
    });
};

export const addDevice = (data) => async (dispatch) => {
  dispatch({ type: ADD_DEVICE_REQUEST });

  return await axios
    .post("http://localhost:8080/devices/add", data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: ADD_DEVICE_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: ADD_DEVICE_FAILURE });
    });
};

export const updateDevice = (data, id) => (dispatch) => {
  dispatch({ type: UPDATE_DEVICE_REQUEST });

  axios
    .put(`http://localhost:8080/devices/edit/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: UPDATE_DEVICE_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: UPDATE_DEVICE_FAILURE });
    });
};

export const deleteDevice = (id) => async (dispatch) => {
  dispatch({ type: DELETE_DEVICE_REQUEST });

  return await axios
    .delete(`http://localhost:8080/devices/delete/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: DELETE_DEVICE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: DELETE_DEVICE_FAILURE });
    });
};

export const getById = (id) => async (dispatch) => {
  dispatch({ type: GETBYID_DEVICE_REQUEST });

  return await axios
    .get(`http://localhost:8080/devices/getid/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GETBYID_DEVICE_SUCCESS, payload: res });
    })
    .catch((err) => {
      return dispatch({ type: GETBYID_DEVICE_FAILURE });
    });
};

////////////////////////Vehicle actions////////////////////////////////////

export const getByIdVehicle = (id) => async (dispatch) => {
  dispatch({ type: GETBYID_VEHICLE_REQUEST });

  return await axios
    .get(`http://localhost:8080/vehicles/getId/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GETBYID_VEHICLE_SUCCESS, payload: res });
    })
    .catch((err) => {
      return dispatch({ type: GETBYID_VEHICLE_FAILURE });
    });
};

export const AddVehicleData = (data, id) => async (dispatch) => {
  dispatch({ type: ADD_VEHICLE_REQUEST });

  return await axios
    .post(`http://localhost:8080/vehicles/add/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: ADD_VEHICLE_SUCCESS });
    })
    .then((err) => {
      return dispatch({ type: ADD_VEHICLE_FAILURE });
    });
};

export const editVehicle = (data, user_id, id) => async (dispatch) => {
  dispatch({ type: EDIT_VEHICLE_REQUEST });

  return await axios
    .put(`http://localhost:8080/vehicles/edit/${user_id}/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: EDIT_VEHICLE_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: EDIT_VEHICLE_FAILURE });
    });
};

export const deleteVehicle = (id) => async (dispatch) => {
  dispatch({ type: DELETE_VEHICLE_REQUEST });

  return await axios
    .delete(`http://localhost:8080/vehicles/delete/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: DELETE_VEHICLE_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: DELETE_VEHICLE_FAILURE });
    });
};

export const getVehicle = () => async (dispatch) => {
  dispatch({ type: GET_VEHICLE_REQUEST });

  return await axios
    .get("http://localhost:8080/vehicles/getall", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GET_VEHICLE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_VEHICLE_FAILURE });
    });
};

export const getcustomervehicles = (id) => async (dispatch) => {
  dispatch({ type: GET_CUSTOMERVEHICLE_REQUEST });

  return await axios
    .get(`http://localhost:8080/vehicles/getcustomervehicle/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      return dispatch({
        type: GET_CUSTOMERVEHICLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: GET_CUSTOMERVEHICLE_FAILURE });
    });
};

////////////////////////Customer Actions////////////////////////////

export const getCustomer = () => async (dispatch) => {
  dispatch({ type: GET_CUSTOMER_REQUEST });

  return await axios
    .get("http://localhost:8080/customer/getall", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GET_CUSTOMER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_CUSTOMER_FAILURE });
    });
};

export const getCustomerId = (id) => async (dispatch) => {
  dispatch({ type: GETBYID_CUSTOMER_REQUEST });

  return await axios
    .get(`http://localhost:8080/customer/getid/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GETBYID_CUSTOMER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GETBYID_CUSTOMER_FAILURE });
    });
};

export const addCustomer = (data) => async (dispatch) => {
  dispatch({ type: ADD_CUSTOMER_REQUEST });

  return await axios
    .post("http://localhost:8080/customer/add", data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: ADD_CUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: ADD_CUSTOMER_FAILURE });
    });
};

export const editCustomer = (data, id) => async (dispatch) => {
  dispatch({ type: EDIT_CUSTOMER_REQUEST });

  return await axios
    .put(`http://localhost:8080/customer/edit/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: EDIT_CUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: EDIT_CUSTOMER_FAILURE });
    });
};

export const deleteCustomer = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CUSTOMER_REQUEST });

  return await axios
    .delete(`http://localhost:8080/customer/delete/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: DELETE_CUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: DELETE_CUSTOMER_FAILURE });
    });
};

/////////////////////////////Iot and ECU get Functions /////////////////////

export const getIotData = () => async (dispatch) => {
  dispatch({ type: GET_IoT_REQUEST });

  return await axios
    .get("http://localhost:8080/vehicles/getiot", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GET_IoT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_IoT_FAILURE });
    });
};

export const getECUData = () => async (dispatch) => {
  dispatch({ type: GET_ECU_REQUEST });

  return await axios
    .get("http://localhost:8080/vehicles/getecu", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: GET_ECU_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_ECU_FAILURE });
    });
};
//////////////////////////Customer Master////////////////////////

export const getmastercustomerById = (id) => async (dispatch) => {
  dispatch({ type: GETBYID_MASTERCUSTOMER_REQUEST });

  return await axios
    .get(`http://localhost:8080/master_customer/get/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      return dispatch({
        type: GETBYID_MASTERCUSTOMER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: GETBYID_MASTERCUSTOMER_FAILURE });
    });
};

export const addmastercustomer = (data, id) => async (dispatch) => {
  dispatch({ type: ADD_MASTERCUSTOMER_REQUEST });

  return await axios
    .post(`http://localhost:8080/master_customer/add/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      return dispatch({ type: ADD_MASTERCUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: ADD_MASTERCUSTOMER_FAILURE });
    });
};

export const editmastercustomer =
  (data, user_id, customer_id) => async (dispatch) => {
    dispatch({ type: EDIT_MASTERCUSTOMER_REQUEST });

    return await axios
      .put(
        `http://localhost:8080/master_customer/edit/${user_id}/${customer_id}`,
        data,
        { headers: { authorization: `bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        return dispatch({ type: EDIT_MASTERCUSTOMER_SUCCESS });
      })
      .catch((err) => {
        return dispatch({ type: EDIT_MASTERCUSTOMER_FAILURE });
      });
  };
