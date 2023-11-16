import Header from "../components/header";
import { Outlet } from "react-router-dom";
import AlertDialog from "../components/alert";

export default function MainLayout() {
  return (
    <main>
      <AlertDialog />
      <Header />
      <Outlet />
    </main>
  );
}
