import React from "react";

export default function Travels() {
  const LoginButton = ({ label }) => (
    <button
      type="button"
      className="text-[#3E3E3E] font-medium w-full hover:text-white border border-[#E7760D] hover:bg-[#E7760D] focus:ring-4 focus:outline-none focus:ring-[#ec9340] rounded-sm text-sm px-5 py-2.5 text-center dark:border-[#E7760D] dark:hover:text-white dark:hover:bg-[#E7760D] dark:focus:ring-[#E7760D]"
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col lg:flex-row mt-14 mx-6 lg:mx-12 mb-14 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="lg:w-1/2 space-y-4">
        <span className="text-[#271555] text-2xl md:text-3xl font-extrabold">
          Ready to dive into HABOT?
        </span>
        <p className="text-[#000000] text-sm md:text-base font-light">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="px-4 py-2 text-white bg-[#00732F] rounded-sm hover:bg-green-700">
          Sign up Today!
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:w-1/2 space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex flex-col space-y-4 w-full">
          <LoginButton label="Abu Dhabi" />
          <LoginButton label="Sharjah & Ajman" />
          <LoginButton label="Ras Al Khaimah" />
        </div>
        <div className="flex flex-col space-y-4 w-full">
          <LoginButton label="Dubai" />
          <LoginButton label="Fujairah" />
          <LoginButton label="Umm Al Quwain" />
        </div>
      </div>
    </div>
  );
}
