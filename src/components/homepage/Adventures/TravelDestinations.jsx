import Image from "next/image";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import DestinationCard from "./DestinationCard";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    title: "Western Europe",
    rating: 5,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: "/home/adventure/western-europe.png",
  },
  {
    id: 2,
    title: "South Africa",
    rating: 4,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: "/home/adventure/south-africa.png",
    hasDetails: true,
  },
  {
    id: 3,
    title: "Scandinavia",
    rating: 3,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: "/home/adventure/scandinavia.png",
  },
];

const TravelDestinations = () => {
  return (
    <section className="relative flex items-center justify-center my-10">
      <div className="hidden sm:block absolute left-1 top-1/4 w-1/2 h-full">
        <Image
          src={"/shapes/bridge.png"}
          alt="Bridge"
          width={100}
          height={100}
          loading="lazy"
          className="!w-full !h-full"
        />
      </div>
      <ContentLayoutWrapper>
        <div className="relative z-10 container mx-auto px-4">
          {/* Cards Container */}
          <div className="flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {/* View Packages Button */}
          <div className="flex justify-center mt-12">
            <Button className="btn-main">View Packages</Button>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default TravelDestinations;
