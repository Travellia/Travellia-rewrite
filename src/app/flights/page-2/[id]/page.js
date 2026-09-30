import Welcome from "@/components/common/Welcome";
import FilterSearch from "@/components/common/FilterSearch";
import { notFound } from "next/navigation";
import { getItinearyById } from "@/services/itineariesService";
import FlightPackage from "@/components/flights/page-2/page-2/id/FlightPackage";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = async (props) => {
  const params = await props.params;
  const data = await getItinearyById(params.id);
  if (!data) notFound();

  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image4.png" },
      { id: 2, image: "/flights/welcome/Image5.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    heading: `Flight packages · ${data.country}`,
    // The card clicked on the previous page grows into this photo.
    portrait: {
      image: data.heroImage,
      caption: `${data.city}, ${data.country}`,
      transitionName: "flight-photo",
    },
    title: (
      <>
        Discover <em>{data.city}.</em>
      </>
    ),
  };

  const imageData = {
    image: "/hotel/BookNow/bg.png",
    alt: "resturant",
  };

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
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
