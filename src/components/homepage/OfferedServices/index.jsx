import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import { BiSolidNavigation } from "react-icons/bi";

const SERVICES = [
  {
    title: "Flights & Hotels",
    description: "Convenient flights and comfortable stays near the Haram.",
  },
  {
    title: "Umrah Packages",
    description:
      "Flexible Umrah packages designed around your travel needs, including seasonal options.",
  },
  {
    title: "Hajj Packages",
    description:
      "Complete Hajj arrangements with guidance throughout your pilgrimage.",
  },
  {
    title: "Ziyarat & Holidays",
    description:
      "Guided Ziyarat tours and family-friendly halal holiday experiences.",
  },
  {
    title: "Visa Assistance",
    description: "Reliable support for a smooth and hassle-free visa process.",
  },
  {
    title: "Family & Group Travel",
    description:
      "Special arrangements for families, groups, and organizations, with 24/7 support throughout your journey.",
  },
];

const Index = () => {
  return (
    <section className="xl:min-h-screen">
      <ContentLayoutWrapper className="py-10 md:pt-20 pb-10">
        <h1 className="text-3xl md:text-4xl text-primary font-bold text-center">
          Services we offer
        </h1>

        <div className=" flex-col lg:flex-row lg:flex-nowrap items-start gap-10 py-10 flex ">
          <div className=" w-full lg:w-1/2 ">
            <div className="grid grid-cols-6 grid-rows-7">
              <div className="row-start-1 row-end-5 col-start-1 col-end-7">
                <Image
                  src="/home/services/22.png"
                  alt="Hotel accommodation"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="row-start-5 row-end-8 col-start-1 col-end-4 bg-background pt-3">
                <Image
                  src="/home/services/222.png"
                  alt="Hotel accommodation"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              <div className="row-start-4 row-end-8 col-start-4 col-end-7 bg-background pt-3 pl-3 pr-1 rounded-3xl">
                <Image
                  src="/home/services/33.png"
                  alt="Hotel accommodation"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {SERVICES.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <BiSolidNavigation className="text-primary mt-1 w-4 h-4 flex-shrink-0" />

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-700">
                    {service.title}
                    {" - "}
                  </span>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Index;
