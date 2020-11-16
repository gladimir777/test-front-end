import { PAYMENTS_ERROR, GET_PAYMENTS } from "../action/type";

const initialState = {
  payments: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PAYMENTS:
      return {
        ...state,
        payments: payload,
        loading: false,
      };

    case PAYMENTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
