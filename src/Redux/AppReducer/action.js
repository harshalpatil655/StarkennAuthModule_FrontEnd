import axios from "axios";
import * as types from "./actionTypes";

const token = localStorage.getItem("token");

/////////////////////////Device Actions ////////////////////////////////////////

export const getData = () => async (dispatch) => {
  dispatch({ type: types.GET_DEVICE_REQUEST });

  return await axios
    .get("http://localhost:8080/devices/getall", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GET_DEVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.GET_DEVICE_FAILURE });
    });
};

export const addDevice = (data) => async (dispatch) => {
  dispatch({ type: types.ADD_DEVICE_REQUEST });

  return await axios
    .post("http://localhost:8080/devices/add", data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.ADD_DEVICE_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.ADD_DEVICE_FAILURE });
    });
};

export const updateDevice = (data, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_DEVICE_REQUEST });

  axios
    .put(`http://localhost:8080/devices/edit/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.UPDATE_DEVICE_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.UPDATE_DEVICE_FAILURE });
    });
};

export const deleteDevice = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_DEVICE_REQUEST });

  return await axios
    .delete(`http://localhost:8080/devices/delete/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.DELETE_DEVICE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DEVICE_FAILURE });
    });
};

export const getById = (id) => async (dispatch) => {
  dispatch({ type: types.GETBYID_DEVICE_REQUEST });

  return await axios
    .get(`http://localhost:8080/devices/getid/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GETBYID_DEVICE_SUCCESS, payload: res });
    })
    .catch((err) => {
      return dispatch({ type: types.GETBYID_DEVICE_FAILURE });
    });
};

////////////////////////Vehicle actions////////////////////////////////////

export const getByIdVehicle = (id) => async (dispatch) => {
  dispatch({ type: types.GETBYID_VEHICLE_REQUEST });

  return await axios
    .get(`http://localhost:8080/vehicles/getId/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GETBYID_VEHICLE_SUCCESS, payload: res });
    })
    .catch((err) => {
      return dispatch({ type: types.GETBYID_VEHICLE_FAILURE });
    });
};

export const AddVehicleData = (data, id) => async (dispatch) => {
  dispatch({ type: types.ADD_VEHICLE_REQUEST });

  return await axios
    .post(`http://localhost:8080/vehicles/add/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.ADD_VEHICLE_SUCCESS });
    })
    .then((err) => {
      return dispatch({ type: types.ADD_VEHICLE_FAILURE });
    });
};

export const editVehicle = (data, user_id, id) => async (dispatch) => {
  dispatch({ type: types.EDIT_VEHICLE_REQUEST });

  return await axios
    .put(`http://localhost:8080/vehicles/edit/${user_id}/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.EDIT_VEHICLE_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.EDIT_VEHICLE_FAILURE });
    });
};

export const deleteVehicle = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_VEHICLE_REQUEST });

  return await axios
    .delete(`http://localhost:8080/vehicles/delete/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.DELETE_VEHICLE_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_VEHICLE_FAILURE });
    });
};

export const getVehicle = () => async (dispatch) => {
  dispatch({ type: types.GET_VEHICLE_REQUEST });

  return await axios
    .get("http://localhost:8080/vehicles/getall", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GET_VEHICLE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_VEHICLE_FAILURE });
    });
};

export const getcustomervehicles = (id) => async (dispatch) => {
  dispatch({ type: types.GET_CUSTOMERVEHICLE_REQUEST });

  return await axios
    .get(`http://localhost:8080/vehicles/getcustomervehicle/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      return dispatch({
        type: types.GET_CUSTOMERVEHICLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CUSTOMERVEHICLE_FAILURE });
    });
};

////////////////////////Customer Actions////////////////////////////

export const getCustomer = () => async (dispatch) => {
  dispatch({ type: types.GET_CUSTOMER_REQUEST });

  return await axios
    .get("http://localhost:8080/customer/getall", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GET_CUSTOMER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CUSTOMER_FAILURE });
    });
};

export const getCustomerId = (id) => async (dispatch) => {
  dispatch({ type: types.GETBYID_CUSTOMER_REQUEST });

  return await axios
    .get(`http://localhost:8080/customer/getid/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({
        type: types.GETBYID_CUSTOMER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GETBYID_CUSTOMER_FAILURE });
    });
};

export const addCustomer = (data) => async (dispatch) => {
  dispatch({ type: types.ADD_CUSTOMER_REQUEST });

  return await axios
    .post("http://localhost:8080/customer/add", data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.ADD_CUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_CUSTOMER_FAILURE });
    });
};

export const editCustomer = (data, id) => async (dispatch) => {
  dispatch({ type: types.EDIT_CUSTOMER_REQUEST });

  return await axios
    .put(`http://localhost:8080/customer/edit/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.EDIT_CUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.EDIT_CUSTOMER_FAILURE });
    });
};

export const deleteCustomer = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_CUSTOMER_REQUEST });

  return await axios
    .delete(`http://localhost:8080/customer/delete/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.DELETE_CUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_CUSTOMER_FAILURE });
    });
};

/////////////////////////////Iot and ECU get Functions /////////////////////

export const getIotData = () => async (dispatch) => {
  dispatch({ type: types.GET_IoT_REQUEST });

  return await axios
    .get("http://localhost:8080/vehicles/getiot", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GET_IoT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_IoT_FAILURE });
    });
};

export const getECUData = () => async (dispatch) => {
  dispatch({ type: types.GET_ECU_REQUEST });

  return await axios
    .get("http://localhost:8080/vehicles/getecu", {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.GET_ECU_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_ECU_FAILURE });
    });
};
//////////////////////////Customer Master////////////////////////

export const getmastercustomerById = (id) => async (dispatch) => {
  dispatch({ type: types.GETBYID_MASTERCUSTOMER_REQUEST });

  return await axios
    .get(`http://localhost:8080/master_customer/get/${id}`, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      return dispatch({
        type: types.GETBYID_MASTERCUSTOMER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GETBYID_MASTERCUSTOMER_FAILURE });
    });
};

export const addmastercustomer = (data, id) => async (dispatch) => {
  dispatch({ type: types.ADD_MASTERCUSTOMER_REQUEST });

  return await axios
    .post(`http://localhost:8080/master_customer/add/${id}`, data, {
      headers: { authorization: `bearer ${token}` },
    })
    .then((res) => {
      console.log(res);
      return dispatch({ type: types.ADD_MASTERCUSTOMER_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_MASTERCUSTOMER_FAILURE });
    });
};

export const editmastercustomer =
  (data, user_id, customer_id) => async (dispatch) => {
    dispatch({ type: types.EDIT_MASTERCUSTOMER_REQUEST });

    return await axios
      .put(
        `http://localhost:8080/master_customer/edit/${user_id}/${customer_id}`,
        data,
        { headers: { authorization: `bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        return dispatch({ type: types.EDIT_MASTERCUSTOMER_SUCCESS });
      })
      .catch((err) => {
        return dispatch({ type: types.EDIT_MASTERCUSTOMER_FAILURE });
      });
  };
