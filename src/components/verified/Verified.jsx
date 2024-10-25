import React from "react";

export default function Verified() {
  return (
    <div className="bg-[#E8FBFF] flex flex-col lg:flex-row justify-between text-black mt-14 mx-6 lg:mx-12 mb-14 h-auto lg:h-[254px] p-8 lg:pl-16 lg:pr-16 lg:pt-24 lg:pb-24">
      <div className="flex items-center font-bold text-xl lg:text-2xl w-full lg:w-1/2 mb-4 lg:mb-0">
        <div>Let Suppliers</div>
        <div className="flex ml-2 border-b-2 border-[#EB7150]">
          Find Buyer
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
        <button
          type="button"
          className="text-white w-full lg:w-2/6 bg-[#EB7150] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get Verified
        </button>
      </div>
    </div>
  );
}
