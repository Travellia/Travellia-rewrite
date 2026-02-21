import Welcome from "@/components/common/Welcome";
import AboutTravellia from "@/components/about/AboutTravellia";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import React from "react";

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/about/welcome/Image1.png" }],
    title: "ABOUT US",

    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };
  return (
    <div className="flex flex-col gap-10 bg-background">
      <Welcome data={welcomeData} />
      <AboutTravellia />
      <WhyChooseUs />
    </div>
  );
};

export default page;
