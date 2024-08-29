import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} className="h-12 w-12 mr-2" alt="Logo" />
              <span className="text-xl tracking-tight">VirtualR Clone</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 px-10 items-center">
              <a
                href="#"
                className="py-2 px-3 border border-gray-300 rounded-md text-white hover:bg-gray-800 hover:text-white hover:border-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Sign in
              </a>

              <a
                href="#"
                className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 hover:from-purple-800 hover:via-blue-500 hover:to-blue-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 py-3 px-3 rounded-md"
              >
                Create a new account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-4 transition-transform duration-300 hover:scale-105"
                  >
                    <a
                      href={item.href}
                      className="text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-6">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md text-white transition-all duration-300 hover:bg-gray-800 hover:text-white hover:border-white hover:shadow-lg transform hover:scale-105"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 text-white transition-all duration-300 hover:from-purple-800 hover:via-blue-500 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Create a new account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
