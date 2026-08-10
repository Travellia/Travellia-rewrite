import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PackageCard from "@/components/common/PackageCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PLACES = [
  {
    id: 1,
    name: "Egypt",
    price: 1349,
    image: "/home/adventure/egypt.png",
    description: "Umrah with Egypt Stay",
    startingPrice: "Starting From £134",
  },
  {
    id: 2,
    name: "Turkey",
    price: 1349,
    image: "/home/adventure/turkey.png",
    description: "Umrah with Turkey Stay",
    startingPrice: "Starting From £134",
  },
  {
    id: 3,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai.png",
    description: "Umrah with Dubai Stay",
    startingPrice: "Starting From £134",
  },
  {
    id: 4,
    name: "Abu Dhabi",
    price: 1349,
    image: "/home/adventure/abu-dhabi.png",
    description: "Umrah with Abu Dhabi Stay",
    startingPrice: "Starting From £134",
  },
  {
    id: 5,
    name: "turkey",
    price: 1349,
    image: "/home/adventure/turkey-2.png",
    description: "Umrah with turkey Stay",
    startingPrice: "Starting From £134",
  },
  {
    id: 6,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai-2.png",
    description: "Umrah with Dubai Stay",
    startingPrice: "Starting From £134",
  },
];

const UmrahStayPackages = () => {
  return (
    <section className="pb-12 sm:pb-20 md:pb-30">
      <ContentLayoutWrapper className={"flex flex-col justify-center items-center gap-10"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6 w-full">
          {PLACES.map((place) => (
            <Card
              key={place.id}
              className="relative overflow-hidden rounded-4xl h-96 group cursor-pointer py-0"
            >
              <PackageCard data={place} text />
            </Card>
          ))}
        </div>
        <Button className="btn-main">Load More</Button>
      </ContentLayoutWrapper>
    </section>
  );
};

export default UmrahStayPackages;
