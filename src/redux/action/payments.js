import axios from "axios";

import { GET_PAYMENTS, PAYMENTS_ERROR } from "./type";

export const getPayments = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/payments");
    dispatch({ type: GET_PAYMENTS, payload: response.data });
  } catch (error) {
    dispatch({
      type: PAYMENTS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
