import React from "react";
import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <header className="w-[100%] px-8 flex flex-col items-center mx-auto fixed left-0 top-0 right-0 z-50 bg-white  ">
        {/* search bar */}
        <div className="w-full flex flex-wrap items-center justify-between px-8 border-b  ">
          <div className="flex flex-wrap items-center justify-between px-8 ">
            <div className="flex items-center">
              <form className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <IoSearch className="text-2xl" />
                </button>
              </form>
            </div>
          </div>

          {/* logo */}
          <div className="logo">
            <Logo />
          </div>
          {/* auth buttons */}
          <div className="auth flex gap-x-6 py-2">
            <button className="bg border border-gray-600 text-gray-900 font-semibold text-sm px-3 py-1 rounded">
              Register
            </button>
            <button className="bg bg-gray-600 text-white font-semibold text-sm px-3 py-1 rounded">
              Login
            </button>
          </div>
        </div>

        <div className="w-full  navLinks">
          <Navbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
