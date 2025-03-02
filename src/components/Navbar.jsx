import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMen] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-10">
          <img
            src="src/assets/img/logo-removebg-preview.png"
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-48 xl:w-56 h-auto object-contain"
          />

          <ul className="hidden md:flex gap-7 text-white relative">
            <a
              href="#Header"
              className="cursor-pointer hover:text-emerald-900 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#About"
              className="cursor-pointer hover:text-emerald-900 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#Portfolio"
              className="cursor-pointer hover:text-emerald-900 transition-all duration-300"
            >
              Portfolio
            </a>
            {/* <a
              href="#Clients"
              className="cursor-pointer hover:text-emerald-900 transition-all duration-300"
            >
              Clients
            </a> */}
            <a
              href="#Contact"
              className="cursor-pointer hover:text-emerald-900 transition-all duration-300"
            >
              Contact
            </a>
          </ul>
          <img
            onClick={() => setshowMobileMen(true)}
            src="src/assets/img/menu.png"
            className="md:hidden w-8 h-8 cursor-pointer"
            alt=""
          />
        </div>
        {/* ------ mobile menu ------ */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-white transition-transform transform ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <img
              onClick={() => setshowMobileMen(false)}
              src="src/assets/img/close.png"
              className="w-6 cursor-pointer"
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
            <a
              onClick={() => setshowMobileMen(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all duration-300"
            >
              Home
            </a>
            <a
              onClick={() => setshowMobileMen(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all duration-300"
            >
              About
            </a>
            <a
              onClick={() => setshowMobileMen(false)}
              href="#Portfolio"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all duration-300"
            >
              Portfolio
            </a>
            {/* <a
              onClick={() => setshowMobileMen(false)}
              href="#Client"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all duration-300"
            >
              Client
            </a> */}
            <a
              onClick={() => setshowMobileMen(false)}
              href="#Contact"
              className="px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all duration-300"
            >
              Contact
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
