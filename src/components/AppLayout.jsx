import { Outlet } from "react-router-dom";
import AppNavList from "./AppNavList";

function AppLayout() {
  return (
    <AppNavList />
    <Outlet />
  );
}

export default AppLayout;
