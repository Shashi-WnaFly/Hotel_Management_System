import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div className="relative mt-16">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
