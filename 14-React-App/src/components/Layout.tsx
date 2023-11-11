import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full dark:bg-primary-black dark:text-white">
      <ScrollRestoration />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
