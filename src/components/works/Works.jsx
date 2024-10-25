import React from "react";
import Document from "./img/document1.png";
import AddIcon from "./img/addIcon.png";
import SearchIcon from "./img/search.png";
import QuoteIcon from "./img/quote.png";
import EditIcon from "./img/editIcon.png";
import GroupIcon from "./img/groupIcon.png";

export default function Works() {
  return (
    <div className="mt-14 mx-6 lg:mx-12 mb-14 h-auto pl-6 pr-6 pt-8 pb-8 lg:pl-16 lg:pr-16 lg:pt-24 lg:pb-24">
      <div className="gap-2 flex justify-center items-center text-[#222222] text-4xl font-bold">
        How it works?
      </div>
      <div className="flex justify-center items-center flex-col gap-2 mt-4 font-normal text-base text-center">
        <span>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with
        </span>
        <span>
          potential buyers, and build successful business relationships, sharing
          valuable feedback.
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-10">
        {[
          {
            img: AddIcon,
            title: "Select Your Role and",
            subtitle: "Sign Up",
            bgColor: "#E8FBFF",
          },
          {
            img: Document,
            title: "Buyers Post Your",
            subtitle: "Requirements",
          },
          {
            img: SearchIcon,
            title: "Review, Select, and",
            subtitle: "Contact the Best Suppliers",
            bgColor: "#E8FBFF",
          },
          {
            img: QuoteIcon,
            title: "Suppliers Complete your",
            subtitle: "profile and get notified for",
            subtitle2: "opportunities",
          },
          {
            img: EditIcon,
            title: "Contact to Buyers and Share",
            subtitle: "your Quote for the service",
            bgColor: "#E8FBFF",
          },
          {
            img: GroupIcon,
            title: "Both the Parties can Connect",
            subtitle: "and Make Business Leave a",
            subtitle2: "Feedback",
          },
        ].map(({ img, title, subtitle, subtitle2, bgColor }, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 justify-center items-center p-8 ${
              bgColor ? "bg-[#E8FBFF]" : "bg-transparent"
            } rounded-sm `}
          >
            <img className="w-20 h-20" src={img} alt={title} />
            <div className="flex flex-col mt-4 text-center text-[#000000] font-medium">
              <span>{title}</span>
              <span>{subtitle}</span>
              {subtitle2 && <span>{subtitle2}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
