import React from "react";
import FacilitySection from "./FacilitySection";
import Testimonial from "./Testimonial";
import Introduction from "./Introduction";
import About from "./About";

const Home = () => {
    return (
        <div className="relative ">
            <Introduction />
            <About />
            <FacilitySection />
            <Testimonial />
        </div>
    )
}

export default Home;