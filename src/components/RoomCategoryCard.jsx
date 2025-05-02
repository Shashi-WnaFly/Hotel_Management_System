import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

const RoomCategoryCard = ({title, price, imgURL}) => {
  return (
    <div className="overflow-hidden md:h-full h-[530px] w-full relative rounded-xl">
      <img
        src={
          imgURL
        }
        alt="roomImage"
        className="md:w-full h-full object-cover "
      />
      <div className=" absolute top-12 left-0 z-10 p-4 text-white w-full md:w-full h-full flex justify-end flex-col cursor-pointer hover:top-0 gap-4 hover:bg-linear-to-t from-black transition-all duration-150 ease-in">
        <div className="text-3xl md:text-4xl">{title}</div>
        <div className="flex gap-8 text-lg">
          <div className="flex items-center gap-2">
            <FaHome /> 35 Feets size
          </div>
          <div className="flex items-center gap-2">
            <FaUser /> 2 Guests{" "}
          </div>
        </div>
        <div className="text-3xl md:text-4xl">₹{price}</div>
        <button className="underline cursor-pointer transition-all text-md font-semibold hover:text-amber-600">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default RoomCategoryCard;
