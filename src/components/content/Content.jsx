import React from "react";
import BackgroundImage from "./bg.png";
import SuitCaseIcon from "./suitcase.png";
import LocationIcon from "./location.png";

export default function Content() {
  return (
    <div
      className="h-[60vh] w-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `
          linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, 
          rgba(7, 47, 87, 0) 94.58%),
          linear-gradient(0deg, rgba(7, 47, 87, 0.45), 
          rgba(7, 47, 87, 0.45)),
          url(${BackgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 lg:px-16">
        <div className="text-white text-center space-y-4 mb-6">
          <div className="font-black text-3xl md:text-4xl lg:text-5xl">
            Are You a Supplier?
          </div>
          <div className="font-light text-2xl md:text-3xl lg:text-5xl">
            Explore Matching Opportunities.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-2xl">
          <div className="relative w-full sm:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src={SuitCaseIcon} alt="Suitcase Icon" className="w-4 h-4" />
            </div>
            <input
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your required service here"
            />
          </div>

          <div className="relative w-full sm:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src={LocationIcon} alt="Location Icon" className="w-4 h-4" />
            </div>
            <input
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 w-full focus:border-blue-500 block pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your desired location here"
            />
          </div>
          <button className="w-full sm:w-auto px-4 py-2 text-white bg-[#00732F] rounded-sm hover:bg-blue-600">
            Search
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center text-white mt-6 space-y-2 sm:space-y-0 sm:space-x-2 text-center sm:text-left">
          <div className="text-lg font-extrabold">Are you a buyer?</div>
          <div className="underline cursor-pointer">
            Click here if you are looking to post a requirement
          </div>
        </div>
      </div>
    </div>
  );
}
