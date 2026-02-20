import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import React from "react";

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/umrahDetail/welcome/slide1.png" }],
    title: "DETAIL PAGE",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };
  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab={"umrah"} />
      </div>
    </div>
  );
};

export default page;
