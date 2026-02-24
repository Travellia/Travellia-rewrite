import Welcome from "@/components/common/Welcome";
import AboutTravellia from "@/components/about/AboutTravellia";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AmazingTeam from "@/components/about/AmazingTeam";
import React from "react";
import Video from "@/components/about/Video";

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/about/welcome/Image1.png" }],
    title: "ABOUT US",

    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };
  return (
    <div className="flex flex-col gap-10 bg-background mb-10 md:mb-15 lg:mb-20">
      <Welcome data={welcomeData} />
      <AboutTravellia />
      <WhyChooseUs />
      <AmazingTeam />
      <Video />
    </div>
  );
};

export default page;
