import { HOTELS_ERROR, GET_HOTELS } from "../action/type";

const initialState = {
  hotels: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HOTELS:
      return {
        ...state,
        hotels: payload,
        loading: false,
      };

    case HOTELS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
