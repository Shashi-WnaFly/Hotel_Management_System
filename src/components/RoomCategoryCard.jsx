import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

const RoomCategoryCard = () => {
  return (
    <div className=" p-4 text-white w-96 h-full flex justify-end flex-col cursor-pointer gap-4 mb-[-90px] hover:mb-[0px] hover:bg-linear-to-t from-black transition-all ease-in">
      <div className="text-4xl">Presidential Suite</div>
      <div className="flex gap-8 text-lg">
        <div className="flex items-center gap-2">
          <FaHome /> 35 Feets size
        </div>
        <div className="flex items-center gap-2">
          <FaUser /> 2 Guests{" "}
        </div>
      </div>
      <div className="text-4xl">$200</div>
      <button className="underline cursor-pointer transition-all text-md font-semibold hover:text-amber-600">
        Discover More
      </button>
    </div>
  );
};

export default RoomCategoryCard;
