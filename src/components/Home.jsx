import React from "react";
import FacilitySection from "./FacilitySection";
import Testimonial from "./Testimonial";
import Introduction from "./Introduction";
import About from "./About";
import RoomCategory from "./RoomCategory";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="relative ">
            <Introduction />
            <About />
            <FacilitySection />
            <RoomCategory />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home;