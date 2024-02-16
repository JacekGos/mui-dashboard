import { Outlet } from "react-router-dom";
import Topbar from "../topbar/Topbar";


export default function MainLayout() {
  return (
    <>
       <Topbar />
       <Outlet />
    </>
  )
}
