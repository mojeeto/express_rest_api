import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../utils/redux";
import { Alert } from "flowbite-react";
import { removeAlert } from "../../../utils/redux/action/alertAction";

const AlertDialog: React.FC = () => {
  const alerts = useSelector((state: RootState) => state.alerts);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col fixed z-[100] top-2 left-2">
      {alerts.map((alert, index) => {
        const alertColor =
          alert.type === "ERROR"
            ? "failure"
            : alert.type === "SUCCESS"
            ? "success"
            : "warning";
        return (
          <Alert
            color={alertColor}
            onDismiss={() => {
              dispatch(removeAlert(alert));
            }}
            key={index}
          >
            <span className="font-medium mr-2">
              {alert.type.charAt(0) + alert.type.slice(1).toLowerCase()} alert!
            </span>
            {alert.message}
          </Alert>
        );
      })}
    </div>
  );
};

export default AlertDialog;
