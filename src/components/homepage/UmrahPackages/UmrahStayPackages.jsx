import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PackageCard from "@/components/common/PackageCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const PLACES = [
  {
    id: 1,
    name: "Egypt",
    price: 1349,
    image: "/home/adventure/egypt.png",
    description: "Umrah with Egypt Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 2,
    name: "Turkey",
    price: 1349,
    image: "/home/adventure/turkey.png",
    description: "Umrah with Turkey Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 3,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai.png",
    description: "Umrah with Dubai Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 4,
    name: "Abu Dhabi",
    price: 1349,
    image: "/home/adventure/abu-dhabi.png",
    description: "Umrah with Abu Dhabi Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 5,
    name: "Turkey",
    price: 1349,
    image: "/home/adventure/turkey-2.png",
    description: "Umrah with Turkey Stay",
    startingPrice: "Starting From £1349",
  },
  {
    id: 6,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai-2.png",
    description: "Umrah with Dubai Stay",
    startingPrice: "Starting From £1349",
  },
];

const UmrahStayPackages = () => {
  return (
    <section className="">
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
        <Button asChild className="btn-main">
          <Link href="/hajj-umrah">Explore Now</Link>
        </Button>
      </ContentLayoutWrapper>
    </section>
  );
};

export default UmrahStayPackages;
