import React from "react";
import Logo from "./image/header.png";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center m-6">
      <div className="w-full lg:w-3/6 flex justify-center lg:justify-start mb-4 lg:mb-0">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="flex flex-col lg:flex-row text-[#6D6E71] text-lg w-full lg:w-2/6 lg:justify-between items-center lg:items-center">
        <p className="mb-2 lg:mb-0">Find Suppliers</p>
        <p className="mb-2 lg:mb-0 lg:ml-4">Find Service Tags</p>
        <button
          type="button"
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm px-5 py-2.5 mt-2 lg:mt-0 lg:ml-4 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Login/Sign Up
        </button>
      </div>
    </div>
  );
}
