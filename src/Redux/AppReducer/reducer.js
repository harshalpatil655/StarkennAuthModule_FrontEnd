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

const initialState = {
  isLoading: false,
  isError: false,
  device_Data: "",
  update_device_Data: "",
  vehicle_data: "",
  vehicleIdData: "",
  customer_data: "",
  customerId_data: "",
  iot_Data: "",
  ecu_Data: "",
  customer_vehicle_Data: "",
  master_customer: "",
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case ADD_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case UPDATE_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UPDATE_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UPDATE_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        device_Data: payload,
      };
    }
    case GET_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case DELETE_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case GETBYID_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GETBYID_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        update_device_Data: payload,
      };
    }
    case GETBYID_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    //////////////////////////////////////////////vehicle  cases//////////////////////////////
    case GETBYID_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GETBYID_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        vehicleIdData: payload,
      };
    }
    case GETBYID_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case GET_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        vehicle_data: payload,
      };
    }
    case GET_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case ADD_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case EDIT_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EDIT_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case EDIT_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case DELETE_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DELETE_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customer_data: payload,
      };
    }

    case GET_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GETBYID_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GETBYID_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customerId_data: payload,
      };
    }

    case GETBYID_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case ADD_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case EDIT_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EDIT_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case EDIT_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case DELETE_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DELETE_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: false,
      };
    }
    case GET_IoT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_IoT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        iot_Data: payload,
      };
    }
    case GET_IoT_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_ECU_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ECU_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ecu_Data: payload,
      };
    }
    case GET_ECU_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_CUSTOMERVEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CUSTOMERVEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customer_vehicle_Data: payload,
      };
    }
    case GET_CUSTOMERVEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case GETBYID_MASTERCUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GETBYID_MASTERCUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        master_customer: payload,
      };
    }
    case GETBYID_MASTERCUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case ADD_MASTERCUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_MASTERCUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_MASTERCUSTOMER_FAILURE: {
      return {
        ...state,
        isError: false,
      };
    }

    case EDIT_MASTERCUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EDIT_MASTERCUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case EDIT_MASTERCUSTOMER_FAILURE: {
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
