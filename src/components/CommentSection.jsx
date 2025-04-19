import React from "react";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-base-300">
      <div className="text-3xl my-4">Testimonial</div>
      <div className="text-7xl my-4">What Our Client Say</div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <CommentCard
            comment={
              "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
            }
            profilePhoto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE4oERoxtGFwJmAOhHIoCmaFdO27n9Sc0gn2DV2KeKw&s&ec=72940545"}
            userName={"Sarah Martinez "}
            accupation={"COO of Apex Solutions"}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
