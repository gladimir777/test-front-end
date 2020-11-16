import axios from "axios";

import { GET_NOTIFICATIONS, NOTIFICATIONS_ERROR } from "./type";

export const getNotifications = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/notifications");
    dispatch({ type: GET_NOTIFICATIONS, payload: response.data });
  } catch (error) {
    dispatch({
      type: NOTIFICATIONS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
