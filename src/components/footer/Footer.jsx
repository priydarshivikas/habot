import React from "react";
import Logo from "./whitelogo.png";
import Facebook from "./img/facebook.png";
import Twitter from "./img/twitter.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";

export default function Footer() {
  return (
    <div className="bg-[#123557] text-white w-full p-6">
      <div className="flex flex-col md:flex-row justify-between md:p-8 sm:p-2 border-t border-b border-[#FFFFFF33]">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col mb-4 md:mb-0">
              <img src={Logo} alt="logo" className="w-52 h-10" />
              <p className="text-[#FFFFFF] font-light text-sm mt-4 ml-4">© R Singhania</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full md:w-2/5">
              <div className="flex flex-col space-y-2">
                <h2 className="text-white font-bold text-md mb-2">Company</h2>
                <p className="text-[#FFFFFF] font-light text-sm">About</p>
                <p className="text-[#FFFFFF] font-light text-sm">FAQ</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-white font-bold text-md mb-2">Terms</h2>
                <p className="text-[#FFFFFF] font-light text-sm">Details Privacy</p>
                <p className="text-[#FFFFFF] font-light text-sm">Terms</p>
                <p className="text-[#FFFFFF] font-light text-sm">Accessibility</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-white font-bold text-md mb-2">Related</h2>
                <p className="text-[#FFFFFF] font-light text-sm">Find Buyer</p>
                <p className="text-[#FFFFFF] font-light text-sm">Feedback</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0 w-full md:w-auto ">
          {[
            { src: Facebook, alt: "Facebook" },
            { src: Twitter, alt: "Twitter" },
            { src: Instagram, alt: "Instagram" },
            { src: Linkedin, alt: "LinkedIn" },
          ].map(({ src, alt }, index) => (
            <div
              key={index}
              className="border rounded-full p-1 flex items-center justify-center w-10 h-10"
            >
              <img src={src} alt={alt} className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
