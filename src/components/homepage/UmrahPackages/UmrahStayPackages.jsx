import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PackageCard from "@/components/common/PackageCard";
import ArrowButton from "@/components/ui/ArrowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import Unveil from "@/components/ui/Unveil";

const PLACES = [
  {
    id: 1,
    name: "Egypt",
    price: 1349,
    image: "/home/adventure/egypt.webp",
    description: "Umrah with Egypt Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 2,
    name: "Turkey",
    price: 1349,
    image: "/home/adventure/turkey.webp",
    description: "Umrah with Turkey Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 3,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai.webp",
    description: "Umrah with Dubai Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 4,
    name: "Abu Dhabi",
    price: 1349,
    image: "/home/adventure/abu-dhabi.webp",
    description: "Umrah with Abu Dhabi Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 5,
    name: "Turkey",
    price: 1349,
    image: "/home/adventure/turkey-2.webp",
    description: "Umrah with Turkey Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 6,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai-2.webp",
    description: "Umrah with Dubai Stay",
    startingPrice: "Starting From £1349",
  },
];

const UmrahStayPackages = () => {
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Halal-friendly holidays"
            title={
              <>
                Umrah, then
                <br />
                <em>stay a little longer.</em>
              </>
            }
            intro="Combine your pilgrimage with a relaxing stay in Egypt, Turkey, Dubai or Abu Dhabi."
          />
          <ArrowButton href="/hajj-umrah">Explore Now</ArrowButton>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {PLACES.map((place) => (
            <Unveil
              key={place.id}
              className="relative h-80 overflow-hidden rounded-card shadow-soft md:h-96"
            >
              <PackageCard data={place} />
            </Unveil>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default UmrahStayPackages;
