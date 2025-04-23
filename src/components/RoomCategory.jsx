import React from "react";
import RoomCategoryCard from "./RoomCategoryCard";
import { ARROW } from "../constant";

const RoomCategory = () => {
  return (
    <div className="px-18">
      <div className="grid grid-cols-2 px-4 pt-4">
        <div className="text-6xl flex items-center">
          <span>
            <img src={ARROW} alt="arrow" className="w-20" />
          </span>
          <span>Our Rooms</span>
        </div>
        <div className="text-lg/loose text-gray-700">
          Our rooms offer a harmonious blend of comfort and elegance, designed
          to provide an exceptional stay for every guest. Each room features
          plush bedding, high-quality linens, and a selection of pillows to
          ensure a restful night’s sleep.
        </div>
      </div>
      <div className="h-screen flex items-center justify-between flex-wrap relative">
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="w-96 h-9/12 object-cover brightness-75"
        />
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="md:w-96 h-9/12 object-cover "
        />
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="md:w-96 h-9/12 object-cover "
        />
        <div className="absolute top-22 left-0 bg-transparent w-full h-9/12 flex items-center flex-wrap justify-between overflow-hidden">
          <RoomCategoryCard />
          <RoomCategoryCard />
          <RoomCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default RoomCategory;
