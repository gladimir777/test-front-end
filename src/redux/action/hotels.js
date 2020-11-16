import axios from "axios";

import { GET_HOTELS, HOTELS_ERROR } from "./type";

export const getHotels = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/hotels");
    console.log("Hotels", response);
    dispatch({ type: GET_HOTELS, payload: response.data });
  } catch (error) {
    dispatch({
      type: HOTELS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
