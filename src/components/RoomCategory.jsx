import React from "react";
import RoomCategoryCard from "./RoomCategoryCard";
import { ARROW } from "../constant";

const RoomCategory = () => {
  return (
    <div className="md:px-18 w-full px-4 md:h-[900px]">
        <div className="md:h-3/12 md:flex md:flex-row justify-between gap-74 md:px-4 ">
          <div className="md:text-6xl text-4xl w-full">
            <div className="flex items-center h-full p-8 pl-2 ">
              <img src={ARROW} alt="arrow" className="md:w-20 w-10" />
              <div>Our Rooms</div>
            </div>
          </div>
          <div className="md:text-lg/loose self-center text-base/loose text-gray-700">
            Our rooms offer a harmonious blend of comfort and elegance, designed
            to provide an exceptional stay for every guest. Each room features
            plush bedding, high-quality linens, and a selection of pillows to
            ensure a restful night’s sleep.
          </div>
        </div>
        <div className="mt-4 md:pb-34 md:mt-0 w-full md:h-9/12 mb-12 h-full flex items-center md:flex-nowrap flex-wrap md:gap-16 gap-8 justify-between">
          <RoomCategoryCard title={"Presidential Suite"} price={"4999"} imgURL={"https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"}/>
          <RoomCategoryCard title={"Metropolitan Suite"} price={"7999"} imgURL={"https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2024/10/post3.webp"}/>
          <RoomCategoryCard title={"Primium Delux Room"} price={"2999"} imgURL={"https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2024/10/post1.webp"}/>
        </div>
      </div>
  );
};

export default RoomCategory;
