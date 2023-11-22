import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { Toaster } from "./ui/toaster";
import Cart from "./Cart";

const Layout = () => {
  return (
    <div className="relative w-full dark:bg-primary-black dark:text-white">
      <Toaster />
      <ScrollRestoration />
      <Navbar />
      <Cart />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
