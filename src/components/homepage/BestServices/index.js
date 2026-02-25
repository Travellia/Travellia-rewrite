import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    title: "Incredible Destinations",
    description:
      "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",
    iconPath: "/home/offered-services/destination.png",
  },
  {
    title: "Best Flight Options",
    description:
      "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",
    iconPath: "/home/offered-services/flight-route.png",
  },
  {
    title: "Hajj / Umrah Tours",
    description:
      "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",
    iconPath: "/home/offered-services/religion.png",
  },
  {
    title: "Luxury Accomodation",
    description:
      "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",
    iconPath: "/home/offered-services/five.png",
  },
];
export default function OfferedServices() {
  return (
    <section className="pt-5 md:pt-10  xl:pt-20 bg-background relative overflow-hidden">
      <ContentLayoutWrapper className="flex flex-col z-2">
        <div className="text-center mb-8 z-2">
          <h2 className="text-lg font-ultralight text-center capitalize">
            We Offer best
          </h2>
          <h2 className="text-5xl font-bold text-center capitalize text-primary">
            services
          </h2>
        </div>
        <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-rows-2 md:grid-cols-2  lg:w-[90%] lg:grid-cols-2 xl:w-[75%] z-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 py-8 px-12 border border-gray-200 bg-gray-100 rounded-4xl hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={service.iconPath}
                alt={service.title}
                className="w-20 h-20 object-contain"
                width={60}
                height={60}
              />
              <h3 className="md:text-xl lg:text-4xl font-bold text-primary text-center capitalize">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
              <Button variant="default" className="mt-4 rounded-full w-[100%]">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
      <div className="hidden lg:block w-100 lg:w-1/2 h-full absolute top-0 right-0 z-1">
        <Image
          src={"/home/offered-services/about-us.png"}
          alt="About us image"
          fill
        />
      </div>
    </section>
  );
}
