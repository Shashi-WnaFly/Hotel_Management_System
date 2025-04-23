import React from "react";
import { ARROW } from "../constant";

const About = () => {
  return (
    <div className="flex md:p-24 p-8 md:flex-nowrap flex-wrap w-full">
      <div className="flex flex-col justify-between md:px-32">
        <div className="text-amber-600 text-2xl flex">
          {" "}
          <img className="w-10" src={ARROW} alt="arrowlogo" /> <span className="text-red-500 mr-2">---- </span>About Us
        </div>
        <p className="md:text-7xl text-4xl py-6">Welcome To Our Moonlit Hotel & Resort</p>
        <p className="text-gray-700 text-base/loose">   
          Welcome to Moonlit, where luxury meets comfort in the heart of canada.
          Since 1999, we have been dedicated to providing an exceptional stay
          for our guests, blending modern amenities with timeless elegance.Our
          beautifully designed rooms and suites offer stunning views and plush
          accommodations, ensuring a restful retreat whether you’re here for
          business or leisure.
        </p>
        <button className=" justify-self-center my-12 px-8 py-4 bg-amber-600 text-white cursor-pointer">Learn More</button>
      </div>
      <div>
        <img
          src="https://reactheme.com/products/wordpress/moonlit/wp-content/uploads/2025/02/about-1.webp"
          alt="about_image"
          className=""
        />
      </div>
    </div>
  );
};

export default About;
