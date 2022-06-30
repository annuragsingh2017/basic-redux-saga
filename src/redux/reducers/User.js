import { USER_TYPE, GET_USER_API_DATA, GET_USER_REQUEST } from "../types";

const initialState = {
  user: [],
  loading: false,
  Error: null,
};
export const User = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case GET_USER_API_DATA: {
      return {
        ...state,
        user: action.payload,
        loading: true,
      };
    }
    case GET_USER_REQUEST: {
      return { ...state, looding: false, user: action.user };
    }
    case GET_USER_REQUEST: {
      return { ...state, looding: false, Error: action.message };
    }

    default:
      return state;
  }
};
