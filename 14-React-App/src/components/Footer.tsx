import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mt-6 h-[200px]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between pb-5">
          <NavLink to="/" className="">
            <p className="text-[20px] font-semibold leading-3">
              E-<span className="text-secondary-green">Library</span>
            </p>
            <p className="text-[12px]">Your book partners</p>
          </NavLink>
          <div className="flex gap-6 text-[14px] font-light">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/" className="hover:underline">
              Contact Us
            </NavLink>
            <NavLink to="/" className="hover:underline">
              About Us
            </NavLink>
          </div>
        </div>

        <div className="flex w-full items-center justify-between border-t pt-5 dark:border-white">
          <div className="flex items-center">
            <p className="border-r pr-5 text-[12px]">
              Copyright © 2023 E-
              <span className="text-secondary-green">Library</span>. All rights
              reserved
            </p>
            <NavLink
              to="/"
              className="pl-5 text-[12px] font-semibold hover:underline"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/"
              className="pl-5 text-[12px] font-semibold hover:underline"
            >
              Term of Use
            </NavLink>
          </div>

          <div className="flex gap-5">
            <span>
              <NavLink to="/">
                <Instagram />
              </NavLink>
            </span>
            <span>
              <NavLink to="/">
                <Twitter />
              </NavLink>
            </span>
            <span>
              <NavLink to="/">
                <Facebook />
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
