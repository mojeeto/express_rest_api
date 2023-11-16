import { createAction } from "@reduxjs/toolkit";

export type AlertType = {
  type: "INFO" | "ERROR" | "SUCCESS";
  message: string;
};

export const addInfoAction = createAction<AlertType>("ADD_INFO_ACTION");
export const addErrorAction = createAction<AlertType>("ADD_ERROR_ACTION");
export const addSuccessAction = createAction<AlertType>("ADD_SUCCESS_ACTION");

export const removeAlert = createAction<AlertType>("REMOVE_ALERT");
