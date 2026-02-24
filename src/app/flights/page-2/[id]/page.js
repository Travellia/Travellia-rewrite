import Welcome from "@/components/common/Welcome";
import FilterSearch from "@/components/common/FilterSearch";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getItinearyById } from "@/services/itineariesService";
import FlightPackage from "@/components/flights/page-2/page-2/id/FlightPackage";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = async (props) => {
  const params = await props.params;
  const data = await getItinearyById(params.id);

  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image4.png" },
      { id: 2, image: "/flights/welcome/Image5.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    title: "FLIGHT DETAIL",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const imageData = {
    image: "/hotel/BookNow/bg.png",
    alt: "resturant",
  };

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="flights" />
        <div>
          <FlightPackage data={data} />
        </div>
        <div>
          <BookNow data={imageData} />
          <PlanYourTrip />
        </div>
      </div>
    </section>
  );
};

export default page;
