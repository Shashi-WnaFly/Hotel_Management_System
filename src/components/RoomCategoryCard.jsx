import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

const RoomCategoryCard = () => {
  return (
    <div className="flex justify-center items-center ">
        <img
          src={
            "https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/03/post4.webp"
          }
          alt="roomImage"
          className="md:w-96 md:h- object-cover"
        />
      <div>
        <div>Presidential Suite</div>
        <div className="flex">
          <div className="flex items-center gap-4">
            <FaHome /> 35 Feets size
          </div>
          <div className="flex items-center">
            <FaUser /> 2 Guests{" "}
          </div>
        </div>
        <div>$200</div>
      </div>
    </div>
  );
};

export default RoomCategoryCard;
