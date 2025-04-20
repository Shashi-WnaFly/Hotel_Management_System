import React from "react";

const Introduction = () => {
  return (
    <div className="relative">
      <div className="z-10 absolute text-white h-10/12 w-9/12 translate-x-2/12 text-center animate-pulse">
        <div className="text-3xl my-12">Welcome to Our Hotel</div>
        <div className="text-7xl/24 mb-12">
          Luxury Stay Hotel Experience Comfort & Elegance
        </div>
        <div className="text-lg">
          Choosing Moonlit is one of the best decisions we've ever made. They{" "}
          <br /> have proven to be a reliable and innovation partner
        </div>
      </div>
      <div className=" carousel w-full z-0 brightness-50 h-10/12">
        <div id="slide11" className="carousel-item relative w-full">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
            className=" h-10/12 w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide41" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide21" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide21" className="carousel-item relative w-full">
          <img
            src="https://www.parkregiskriskin.ae/wp-content/uploads/2020/07/room-twin-bed-2520x1400.jpg"
            className=" h-10/12 w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide11" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide31" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide31" className="carousel-item relative w-full">
          <img
            src="https://expressinnindia.com/wp-content/uploads/2024/07/Freesia-God-23.jpg"
            className=" h-10/12 w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide21" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide41" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
