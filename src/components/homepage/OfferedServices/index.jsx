import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import { BiSolidNavigation } from "react-icons/bi";

const SERVICES = [
  {
    title: "Umrah Packages",
    description: "Affordable and flexible options tailored to your needs.",
  },
  {
    title: "Hajj Packages",
    description:
      "Complete arrangements with full guidance for a peaceful pilgrimage.",
  },
  {
    title: "January Umrah Packages",
    description: "Begin the new year with a blessed journey.",
  },
  {
    title: "December Umrah Packages",
    description: "End the year spiritually with exclusive winter offers.",
  },
  {
    title: "Visa Assistance",
    description: "Reliable and hassle-free visa processing.",
  },
  {
    title: "Flight Bookings",
    description: "Convenient travel plans with trusted airlines.",
  },
  {
    title: "Hotel Accommodation",
    description: "Comfortable and well-located stays near Haram.",
  },
  {
    title: "Guided Ziyarat Tours",
    description: "Spiritual tours led by experienced guides.",
  },
  {
    title: "Halal-Friendly Holidays Abutting Umrah Trip",
    description:
      "Combine your pilgrimage with family-friendly halal holiday experiences.",
  },
  {
    title: "Family & Group Packages",
    description: "Special deals for families, groups, and organizations.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance before, during, and after your journey",
  },
];

const index = () => {
  return (
    <section className="min-h-screen">
      <ContentLayoutWrapper className="py-20">
        <h1 className="text-4xl text-primary font-bold text-center">
          Services we offer
        </h1>
        <div className="flex items-center justify-between py-8 gap-8">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-6 grid-rows-7">
              <div className="row-start-1 row-end-5 col-start-1 col-end-7">
                <img
                  src="/home/services/22.png"
                  alt="Hotel accommodation"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="row-start-5 row-end-8 col-start-1 col-end-4 bg-background pt-3 ">
                <img
                  src="/home/services/222.png"
                  alt="Hotel accommodation"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="row-start-4 row-end-8 col-start-4 col-end-7 bg-background pt-3 pl-3 pr-1 rounded-3xl">
                <img
                  src="/home/services/33.png"
                  alt="Hotel accommodation"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full flex flex-col gap-6">
            {SERVICES.map((service, index) => (
              <div key={index} className="flex items-start justify-start gap-3">
                <div className="flex-shrink-0">
                  <BiSolidNavigation className="text-primary mt-2 w-4 h-4 transform" />
                </div>
                <div className="text-base text-gray-600">
                  <span className="font-bold text-gray-700">
                    {service.title}
                    {"- "}
                  </span>
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
