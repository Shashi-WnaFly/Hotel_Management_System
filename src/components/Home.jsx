import React from "react";
import FacilitySection from "./FacilitySection";
import Testimonial from "./Testimonial";
import Introduction from "./Introduction";

const Home = () => {
    return (
        <div>
            <Introduction />
            <FacilitySection />
            <Testimonial />
        </div>
    )
}

export default Home;