import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "./ui/toaster";

const Layout = () => {
  return (
    <div className="w-full dark:bg-primary-black dark:text-white">
      <Toaster />
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
