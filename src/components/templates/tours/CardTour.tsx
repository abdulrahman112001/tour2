import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

function CardTour() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 p-5 ">
        <div>
          <img
            src="/tour.jpg"
            alt=""
            style={{
              width: "160px",
              height: "120px",
            }}
          />
        </div>
        <div>
          <p className="font-bold">Private Day Trip from Marsa Alam to Luxor</p>
          <div className="flex  gap-3">
            <p className="text-[#6e7277] text-[14px]">Product code: 486653P4</p>
            <p className="flex items-center gap-1 cursor-pointer text-[#186b6d] text-[14px]">
              View on Viator
              <LuExternalLink className="text-[#186b6d] text-lg" />
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-[#186b6d]" />
              Good
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="bg-[#186b6d] p-3 rounded-md px-10 text-white ">
          Improve
        </button>
        <button
        className=" border border-[#186b6d] p-3 rounded-md px-10 text-[#186b6d] "
        >Manage</button>
      </div>
    </div>
  );
}

export default CardTour;
