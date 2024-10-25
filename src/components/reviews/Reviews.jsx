import React from "react";
import Checked from "./checked.png";

export default function Reviews() {
  return (
    <div className="bg-[#072F57] text-white mt-14 mx-6 lg:mx-12 mb-14 h-auto lg:h-[623px] p-8 lg:pl-16 lg:pr-16 lg:pt-24 lg:pb-24">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/2 h-64 lg:h-full mb-8 lg:mb-0">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aL27fX5kv9U"
            title="Introduction To WiseGPT"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="flex justify-center lg:justify-start text-xl lg:text-2xl font-bold gap-8 lg:gap-16 mb-6">
            <span className="text-[#EB7150] border-b-4 border-[#EB7150]">
              Buyer
            </span>
            <span className="text-white">Supplier</span>
          </div>

          <div className="mt-6 lg:mt-12 space-y-4">
            <div className="flex items-center gap-4 font-semibold">
              <img src={Checked} alt="Buyer" className="w-4 h-4" />
              <p>Post your requirements.</p>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <img src={Checked} alt="Buyer" className="w-4 h-4" />
              <p>Sit back for multiple suppliers to contact you.</p>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <img src={Checked} alt="Buyer" className="w-4 h-4" />
              <p>Choose among the suppliers based on ratings and reviews.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
