import React from "react";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-emerald-950 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src="src/assets/img/logo-removebg-preview.png"
            alt="Company Logo"
            className="w-auto max-w-[150px] h-auto md:max-w-[180px] lg:max-w-[200px] object-contain"
          />
          <h3 className="text-white text-lg font-bold mb-4">Address:</h3>
          <p className="text-gray-400 mt-4">
            B-4137, GREEN FEILD, 3rd FLOOR GATE NO-15. , FARIDABAD - 121001
          </p>
        </div>
        {/* Navigation Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#Clients" className="hover:text-white">
              Clients
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact
            </a>
          </ul>
        </div>

        {/* Contact Info - Fully Horizontal Layout */}
        <div className="w-full md:w-1/3 relative top-9">
          <h3 className="text-white text-lg font-bold mb-4">
            For more information, contact:
          </h3>
          <div className="grid grid-cols-2 gap-x-6 text-gray-400">
            <div>
              <span className="block text-white font-semibold">
                Deepak Sharma
              </span>
              <span className="block">09811108177</span>
              <span className="block">deeproot.deepak@gmail.com</span>
            </div>
            <div>
              <span className="block text-white font-semibold">
                Rohit Kukreja
              </span>
              <div className="flex gap-x-2">
                <span className="block">09716790995,</span>
                <span className="block">09870006670</span>
              </div>
              <span className="block">rohitkusher@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © Dhruvgola. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
