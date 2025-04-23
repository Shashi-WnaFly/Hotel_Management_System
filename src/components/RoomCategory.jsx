import React from "react";
import RoomCategoryCard from "./RoomCategoryCard";
import { ARROW } from "../constant";

const RoomCategory = () => {
  return (
    <div className="md:px-18 px-8 flex justify-center flex-col">
      <div className="grid md:grid-cols-2 grid-rows-2 md:px-4 md:pt-4">
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
      <div className=" md:h-screen flex items-center gap-8 justify-between flex-wrap relative">
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="md:w-96 md:h-9/12 h-[550px] object-cover "
        />
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="md:w-96 md:h-9/12 h-[550px] object-cover "
        />
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="md:w-96 md:h-9/12 h-[550px] object-cover "
        />
        <div className="absolute md:top-22 top-0 left-0 bg-transparent w-full md:h-9/12 h-full flex items-center flex-wrap gap-8 justify-between overflow-hidden">
          <RoomCategoryCard />
          <RoomCategoryCard />
          <RoomCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default RoomCategory;
