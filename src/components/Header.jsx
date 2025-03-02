import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('src/assets/img/background.jpg')" }}
        id="Header"
      >
        <Navbar />
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-3xl sm:text-5xl md:text-[30px] inline-block max-w-3xl font-semibold pt-20">
            We eagerly wait to serve you, And Guarantee you, The most Satisfying
            experience with us.
          </h2>
          <div className="space-x-6 mt-16">
            <a
              href="#Portfolio"
              className="border border-white px-8 py-3 rounded  hover:bg-emerald-700 transition-all"
            >
              Portfolio
            </a>
            <a
              href="#Contact"
              className="bg-emerald-950 px-8 py-3 rounded  hover:bg-emerald-700 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
