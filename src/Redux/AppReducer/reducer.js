import * as types from "./actionTypes";

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
    case types.ADD_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.ADD_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.UPDATE_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.UPDATE_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.UPDATE_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.GET_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        device_Data: payload,
      };
    }
    case types.GET_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.DELETE_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.GETBYID_DEVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GETBYID_DEVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        update_device_Data: payload,
      };
    }
    case types.GETBYID_DEVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    //////////////////////////////////////////////vehicle  casestypes.//////////////////////////////
    case types.GETBYID_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GETBYID_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        vehicleIdData: payload,
      };
    }
    case types.GETBYID_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.GET_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        vehicle_data: payload,
      };
    }
    case types.GET_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.ADD_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.ADD_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.EDIT_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.EDIT_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.EDIT_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.DELETE_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.DELETE_VEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.GET_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customer_data: payload,
      };
    }

    case types.GET_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.GETBYID_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GETBYID_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customerId_data: payload,
      };
    }

    case types.GETBYID_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.ADD_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.ADD_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.EDIT_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.EDIT_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.EDIT_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.DELETE_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.DELETE_CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: false,
      };
    }
    case types.GET_IoT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_IoT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        iot_Data: payload,
      };
    }
    case types.GET_IoT_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.GET_ECU_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_ECU_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ecu_Data: payload,
      };
    }
    case types.GET_ECU_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case types.GET_CUSTOMERVEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_CUSTOMERVEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customer_vehicle_Data: payload,
      };
    }
    case types.GET_CUSTOMERVEHICLE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.GETBYID_MASTERCUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GETBYID_MASTERCUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        master_customer: payload,
      };
    }
    case types.GETBYID_MASTERCUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case types.ADD_MASTERCUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.ADD_MASTERCUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.ADD_MASTERCUSTOMER_FAILURE: {
      return {
        ...state,
        isError: false,
      };
    }

    case types.EDIT_MASTERCUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.EDIT_MASTERCUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.EDIT_MASTERCUSTOMER_FAILURE: {
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
