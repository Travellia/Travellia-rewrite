import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const index = () => {
  const services = [
    {
      title: "WIDE VARITY OF DESTINATIONS",
      description:
        "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",
      iconPath: "/about/WhyChooseUs/map.png",
    },
    {
      title: "HIGHLY QUALIFIES SERVICE",
      description:
        "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",

      iconPath: "/about/WhyChooseUs/guarantee.png",
    },
    {
      title: (
        <>
          HANDPICKED <br />
          HOTELS
        </>
      ),
      description:
        "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",

      iconPath: "/about/WhyChooseUs/hotel.png",
    },
    {
      title: (
        <>
          24/7 <br />
          SUPPORT
        </>
      ),
      description:
        "Explore top destinations with our knowledgeable guides, ensuring an enriching travel experience.",

      iconPath: "/about/WhyChooseUs/24-hours.png",
    },
  ];
  return (
    <section className="py-5 md:py-10  bg-background relative overflow-hidden flex flex-col">
      <ContentLayoutWrapper className="flex flex-col z-2">
        <div className="text-center mb-8 z-2">
          <h2 className="text-lg font-ultralight text-center capitalize">
            WHY
          </h2>
          <h2 className="text-5xl font-bold text-center capitalize text-primary">
            CHOOSE US
          </h2>
        </div>
        <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:w-[90%] lg:grid-cols-2 xl:w-[85%] z-2 auto-rows-fr">
          {" "}
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col h-full items-center gap-4 p-8 border border-gray-200 bg-gray-100 rounded-4xl hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={service.iconPath}
                alt={service.title}
                className="w-20 h-20 object-contain"
                width={60}
                height={60}
                loading="lazy"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black/70 text-center capitalize">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
              <Button variant="default" className="mt-4 rounded-full w-full">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-1">
        <Image
          src={"/about/WhyChooseUs/bag.png"}
          alt="About us image"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <div className="hidden lg:block absolute top-0 right-0 w-full h-full z-0">
        <Image
          src={"/about/WhyChooseUs/bg.png"}
          alt="About us image"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default index;
