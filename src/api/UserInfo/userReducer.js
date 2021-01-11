import { FETCH_USER_INFO } from "./userTypes";

const initialState = {
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
