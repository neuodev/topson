import { combineReducers } from "redux";
import { userRegisterReducer } from "./userReducers";

export const rootReducer = combineReducers({
  register: userRegisterReducer,
});
