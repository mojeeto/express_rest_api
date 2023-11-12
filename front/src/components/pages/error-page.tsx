import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const routeError = useRouteError();
  if (isRouteErrorResponse(routeError))
    return <div className="p-5">Page {routeError.statusText}</div>;
  return <h1>ERROR 500</h1>;
}
