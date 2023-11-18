import { Outlet, ScrollRestoration } from "react-router-dom";

import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

const Layout = () => {
  return (
    <div className="w-full dark:bg-primary-black dark:text-white relative">
      <Toaster />
      <ScrollRestoration />
      <Navbar />
      {/* <Cart /> */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
