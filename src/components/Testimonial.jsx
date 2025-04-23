import React from "react";
import CommentCard from "./CommentCard";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-base-300 overflow-hidden box-border">
      <div className="text-xl md:text-3xl my-4">Testimonial</div>
      <div className="text-3xl md:text-7xl my-4">What Our Client Say</div>
      <div className="carousel w-full pb-16">
        <div id="slide1" className="carousel-item relative w-full">
          <CommentCard
            comment={
              "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
            }
            profilePhoto={
              "https://avatars.githubusercontent.com/u/124153986?v=4"
            }
            userName={"Shashi Anand "}
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
          <CommentCard
            comment={
              "The roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45"
            }
            profilePhoto={
              "https://media.licdn.com/dms/image/v2/C4D03AQF7z0BmuM0ecA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1642523471543?e=2147483647&v=beta&t=WYGw4gXAucGwkryyN-OqPwBJUpFS4zuZsByXBmBJmxE"
            }
            userName={"Basu Kumar "}
            accupation={"PUBG Ace Master"}
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
          <CommentCard
            comment={
              "The roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45"
            }
            profilePhoto={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQlAYZyjMtKK3srK2f43baRkUnq8SfuoXwuJIwFEeEw&s&ec=72940545"
            }
            userName={"Eva Elfie "}
            accupation={"Entertainer"}
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
      </div>
    </div>
  );
};

export default Testimonial;
