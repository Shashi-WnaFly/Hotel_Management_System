import React from "react";
import { FaStar } from "react-icons/fa";

const CommentCard = ({ comment, profilePhoto, userName, accupation }) => {
  return (
    <div className="px-64 flex flex-col gap-8 mt-8">
      <div className="text-shadow-amber-400 flex justify-center items-center text-4xl text-amber-500 gap-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="text-2xl text-center text-gray-600">{comment}</div>
      <div className="flex justify-center gap-4">
        <img
          className="w-20 h-20 object-cover rounded-full"
          src={profilePhoto}
          alt="comment profile"
        />
        <div>
          <div className="text-3xl">{userName}</div>
          <div className="text-gray-700">{accupation}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
