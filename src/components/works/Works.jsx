import React from "react";
import Document from "./img/document1.png";
import AddIcon from "./img/addIcon.png";
import SearchIcon from "./img/search.png";
import QuoteIcon from "./img/quote.png";
import EditIcon from "./img/editIcon.png";
import GroupIcon from "./img/groupIcon.png"
export default function Works() {
  return (
    <div className="mt-14 mr-12 ml-12 mb-14 h-100vh pl-16 pr-16 pt-24 pb-24">
      <div className="gap-2 flex justify-center items-center text-[#222222] text-4xl font-bold">
        How it works?
      </div>
      <div className="flex justify-center items-center flex-col gap-2 mt-4 font-normal text-base">
        <span>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with
        </span>
        <span>
          potential buyers, and build successful business relationships, sharing
          valuable feedback.
        </span>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
        <div className="bg-[#E8FBFF] flex flex-col gap-2 justify-center items-center p-8">
          <img
            class="w-20 h-20"
            src={AddIcon}
            alt="document"
          />
          <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
            <span>Select Your Role and</span>
            <span>Sign Up</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-8">
          <img
            class="w-20 h-20"
            src={Document}
            alt="document"
          />
          <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
            <span>Buyers Post Your</span>
            <span>Requirements</span>
          </div>
        </div>
        <div className="bg-[#E8FBFF] flex flex-col gap-2 justify-center items-center p-8">
          <img
            class="w-20 h-20"
            src={SearchIcon}
            alt="document"
          />
          <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
            <span> Review, Select, and</span>
            <span>Contact the Best Suppliers</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-8">
          <img
            class="w-20 h-20"
            src={QuoteIcon}
            alt="document"
          />
          <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
            <span> Suppliers Complete your</span>
            <span>profile and get notified for</span>
            <span>opportunities</span>
          </div>
        </div>
        <div className="bg-[#E8FBFF] flex flex-col gap-2 justify-center items-center p-8">
          <img
            class="w-20 h-20"
            src={EditIcon}
            alt="document"
          />
          <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
            <span>Contact to Buyers and Share</span>
            <span>your Quote for the service</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-8">
          <img
            class="w-20 h-20"
            src={GroupIcon}
            alt="document"
          />
          <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
            <span>Both the Parties can Connect</span>
            <span>and Make Business Leave a</span>
            <span>Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
