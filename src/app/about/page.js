import Welcome from "@/components/common/Welcome";
import AboutTravellia from "@/components/about/AboutTravellia";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AmazingTeam from "@/components/about/AmazingTeam";
import React from "react";
import Video from "@/components/about/Video";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/about/welcome/Image1.webp" }],
    heading: "About us",
    title: (
      <>
        Journeys, <em>made personal.</em>
      </>
    ),
    subtitle: "A UK travel team in Leeds, planning flights, Umrah and holidays around you.",
  };
  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-20 pt-20 md:gap-28 md:pt-28">
        <AboutTravellia />
        <WhyChooseUs />
        <AmazingTeam />
        <Video />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
