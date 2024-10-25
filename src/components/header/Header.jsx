import React from "react";
import Logo from "./image/header.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-8">
      <div className="w-3/6">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col lg:flex-row text-[#6D6E71] text-lg lg:w-2/6 w-full lg:justify-between items-center content-center">
        <p>Find Suppliers</p>
        <p>Find Service Tags</p>
        <button
          type="button"
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Login/Sign Up
        </button>
      </div>
    </div>
  );
}
