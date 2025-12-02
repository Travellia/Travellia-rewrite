import Image from "next/image";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    title: "Western Europe",
    rating: 5,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: "/home/adventure/western-europe.jpg",
  },
  {
    id: 2,
    title: "South Africa",
    rating: 4,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: "/home/adventure/south-africa.jpg",
    hasDetails: true,
  },
  {
    id: 3,
    title: "Scandinavia",
    rating: 3,
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: "/home/adventure/scandinavia.jpg",
  },
];

const TravelDestinations = () => {
  return (
    <section className="relative flex items-center justify-center my-10">
      <div className="absolute left-1 top-1/4 w-1/2 h-full">
        <Image
          src={"/home/adventure/bridge.png"}
          width={100}
          height={100}
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
            <button className="bg-primary hover:bg-primary/70 text-white px-20 py-4 rounded-3xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              View Packages
            </button>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default TravelDestinations;
