import React from "react";

export default function Verified() {
  return (
    <div className="bg-[#E8FBFF] flex justify-between text-Black mt-14 mr-12 ml-12 mb-14 h-[254px] pl-16 pr-16 pt-24 pb-24">
      <div className="flex  items-center font-bold text-2xl w-1/2">
        <div>Let Suppliers</div>
        <div className="flex ml-2 border-b-2 border-[#EB7150]">
          Find Buyer
        </div>
      </div>
     <div className="w-1/2 flex justify-center items-center">
     <button
        type="button"
        className="text-white w-2/6 bg-[#EB7150] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Get Verified
      </button>
     </div>
    </div>
  );
}
