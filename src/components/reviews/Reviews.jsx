import React from "react";
import Checked from "./checked.png";
export default function Reviews() {
  return (
    <div className="bg-[#072F57] text-white mt-14 mr-12 ml-12 mb-14 h-[623px] pl-16 pr-16 pt-24 pb-24">
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aL27fX5kv9U"
            title="Introduction To WiseGPT"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-1/2 h-full pr-8 pl-12">
          <div className="flex text-2xl font-bold gap-16">
            <span className="text-[#EB7150] border-b-4 border-[#EB7150]">
              Buyer
            </span>
            <span className="text-white">Supplier</span>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-4 mb-4 font-semibold">
              <img src={Checked} alt="Buyer" className="w-4 h-4" />
              <p>Post your requirements.</p>
            </div>
            <div className="flex items-center gap-4 mb-4 font-semibold">
              <img src={Checked} alt="Buyer" className="w-4 h-4" />
              <p>Sit back for multiple suppliers to contact you.</p>
            </div>
            <div className="flex items-center gap-4 font-semibold">
              <img src={Checked} alt="Buyer" className="w-4 h-4" />
              <p>
                Choose among the suppliers based on the ratings and reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
