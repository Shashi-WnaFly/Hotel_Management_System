import React from "react";
import FacilityCard from "./FacilityCard";

const cardDetails = [
  [
    "https://www.clipartmax.com/png/middle/49-495395_dorms-hotel-room-icon-png.png",
    "Rooms and Suites",
    "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
  ],
  [
    "https://t4.ftcdn.net/jpg/05/62/77/49/360_F_562774997_ddVwQB07kXKV2o0QrpszXL2x7d9jM8Wd.jpg",
    "24-Hour Security",
    "On-site security personnel and best surveillance. from standard to luxury, Secure storage.",
  ],
  [
    "https://img.favpng.com/14/16/15/physical-fitness-fitness-centre-physical-exercise-computer-icons-png-favpng-wKuvJCsvhDeVcNJriKWci6zka.jpg",
    "Fitness Center",
    "Equipped with exercise machines and weights.Offering massages, facials, and other.",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlJ3zho_u6JSOLQlJFAkxB0QVTeKvDmv_yG8yMMFVgw&s&ec=72940545",
    "Swimming Pool",
    "Indoor or outdoor pools for leisure or exercise.Offering massages, facials, and other",
  ],
];

const FacilitySection = () => {
  return (
    <div className="px-18 pb-4 bg-base-300">
      <div className="flex flex-col md:h-screen min-h-max">
        <div className="text-center md:text-6xl text-5xl my-20">Hotel Facilites</div>
        <div className="flex gap-4 flex-wrap justify-evenly">
          {cardDetails.map((details) => (
            <FacilityCard
              url={details[0]}
              title={details[1]}
              description={details[2]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitySection;
