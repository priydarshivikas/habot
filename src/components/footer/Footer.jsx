import React from "react";
import Logo from "./whitelogo.png";
import Facebook from "./img/facebook.png";
import Twitter from "./img/twitter.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
export default function Footer() {
  return (
    <div className="bg-[#123557] flex justify-between text-white h-100vh pl-16 pr-16  w-full">
      <div className="flex justify-between w-full m-10">
      <div className="w-1/2">
        <div className="flex justify-between w-full">
          <div className="w-1/2 flex flex-col">
            <img src={Logo} alt="logo" className="w-52 h-10" />
            <p className="text-[#FFFFFF] font-light text-sm mt-4 ml-4">© R Singhania</p>
          </div>
          <div className="flex gap-10 w-1/2">
            <div className="flex flex-col space-y-2">
              <h className="text-white font-bold text-md mb-2">Company</h>
              <p className="text-[#FFFFFF] font-light text-sm">About</p>
              <p className="text-[#FFFFFF] font-light text-sm">FAQ</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h className="text-white font-bold text-md mb-2">Terms</h>
              <p className="text-[#FFFFFF] font-light text-sm">
                Details Privacy
              </p>
              <p className="text-[#FFFFFF] font-light text-sm">Terms</p>
              <p className="text-[#FFFFFF] font-light text-sm">Accessibility</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h className="text-white font-bold text-md mb-2">Related</h>
              <p className="text-[#FFFFFF] font-light text-sm">Find Buyer</p>
              <p className="text-[#FFFFFF] font-light text-sm">Feedback</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end gap-4">
        <div className="border rounded-full p-1 flex items-center justify-center w-10 h-10">
          <img src={Facebook} alt="Facebook" className="w-4 h-4" />
        </div>
        <div className="border rounded-full p-1 flex items-center justify-center w-10 h-10">
          <img src={Twitter} alt="Twitter" className="w-4 h-4" />
        </div>
        <div className="border rounded-full p-1 flex items-center justify-center w-10 h-10">
          <img src={Instagram} alt="Instagram" className="w-4 h-4" />
        </div>
        <div className="border rounded-full p-1 flex items-center justify-center w-10 h-10">
          <img src={Linkedin} alt="LinkedIn" className="w-4 h-4" />
        </div>
      </div>
      </div>
    </div>
  );
}
