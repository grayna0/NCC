import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="wrap">
      <Sidebar />
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
