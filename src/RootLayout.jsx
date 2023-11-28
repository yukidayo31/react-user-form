import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function RootLayout() {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}

export default RootLayout;
