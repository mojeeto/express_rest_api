import { createReducer } from "@reduxjs/toolkit";
import {
  AlertType,
  addErrorAction,
  addInfoAction,
  addSuccessAction,
  removeAlert,
} from "../action/alertAction";

const initialStateAlertReducer = [] as AlertType[];

export default createReducer(initialStateAlertReducer, (builder) => {
  builder.addCase(addInfoAction, (state, action) => [...state, action.payload]);
  builder.addCase(addErrorAction, (state, action) => [
    ...state,
    action.payload,
  ]);
  builder.addCase(addSuccessAction, (state, action) => [
    ...state,
    action.payload,
  ]);
  builder.addCase(removeAlert, (state, action) => {
    return state.filter(
      (alert) =>
        alert.type !== action.payload.type &&
        alert.message !== action.payload.message
    );
  });
});
