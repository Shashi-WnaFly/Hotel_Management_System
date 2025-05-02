import React from "react";

const FacilityCard = ({ url, title, description }) => {
  return (
    <>
      <div className="card bg-base-100 w-full md:w-72 shadow-sm hover:shadow-xl rounded-xl transition-shadow duration-500">
        <figure className="px-10 pt-10 h-[40%]">
          <img src={url} alt="room icon" className="w-16" />
        </figure>
        <div className="card-body items-center text-center h-60%]">
          <h2 className="card-title text-2xl font-light">{title}</h2>
          <p className="text-gray-500 text-[15px]/7">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;
