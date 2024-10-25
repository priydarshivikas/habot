import React from "react";

export default function Travels() {
  const LoginButton = ({ label }) => (
    <button
      type="button"
      className="text-[#3E3E3E] font-medium w-full hover:text-white border border-[#E7760D] hover:bg-[#E7760D] focus:ring-4 focus:outline-none focus:ring-[#ec9340]  rounded-sm text-sm px-5 py-2.5 text-center dark:border-[#E7760D] dark:hover:text-white dark:hover:bg-[#9d8c7d] dark:focus:ring-[#e2a168]"
    >
      {label}
    </button>
  );

  return (
    <div className="flex mt-14 mr-12 ml-12 mb-14">
      <div className="w-1/2 space-y-4">
        <span className="text-[#271555] text-3xl font-extrabold mb-8">
          Ready to dive into HABOT?
        </span>
        <p className="text-[#000000] text-base font-light">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="px-4 py-2 text-white bg-[#00732F] rounded-sm hover:bg-blue-600">
          Sign up Today!
        </button>
      </div>

      <div className="flex w-1/2 m-2 ">
        <div className="flex flex-col me-4 space-y-4 w-full">
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
