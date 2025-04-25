import React from "react";
import RoomCategoryCard from "./RoomCategoryCard";
import { ARROW } from "../constant";

const RoomCategory = () => {
  return (
    <div className="md:px-18 w-full px-8 md:h-screen">
        <div className="grid md:h-3/12 md:grid-cols-2 grid-rows-2 md:px-4 md:pt-4 my-auto">
          <div className="md:text-6xl text-4xl flex items-center">
            <span>
              <img src={ARROW} alt="arrow" className="md:w-20 w-10" />
            </span>
            <span>Our Rooms</span>
          </div>
          <div className="md:text-lg/loose text-base/loose text-gray-700">
            Our rooms offer a harmonious blend of comfort and elegance, designed
            to provide an exceptional stay for every guest. Each room features
            plush bedding, high-quality linens, and a selection of pillows to
            ensure a restful night’s sleep.
          </div>
        </div>
        <div className="mt-4 md:mt-0 w-full md:h-9/12 h-full flex items-center md:flex-nowrap flex-wrap md:gap-16 gap-8 justify-between">
          <RoomCategoryCard />
          <RoomCategoryCard />
          <RoomCategoryCard />
        </div>
      </div>
  );
};

export default RoomCategory;
