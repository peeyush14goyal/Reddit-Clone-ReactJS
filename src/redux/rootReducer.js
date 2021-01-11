import { combineReducers } from "redux";
import { userReducer } from "../api/UserInfo/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
