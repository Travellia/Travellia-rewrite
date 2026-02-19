import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import LuxuryAssuringCard from "./LuxuryAssuringCard";

const index = ({ data }) => {
  return (
    <section>
      <ContentLayoutWrapper className=" sm:pt-5 flex justify-center items-center ">
        <div className="flex flex-col gap-5 m-auto">
          {/* Header */}
          <div className="flex flex-col items-center">
            <p className="font-semibold">{data.subtitle}</p>
            <h1 className="text-4xl font-bold text-primary tracking-widest">
              {data.title}
            </h1>
          </div>

          {/* Line */}
          <div className="flex justify-center">
            <hr className="border-primary border-t-2 w-[20%]" />
          </div>

          {/* Heading and description */}
          <div className="flex flex-col gap-3">
            <span className="text-gray-700 uppercase text-sm md:text-2xl lg:text-3xl mx-auto tracking-wider">
              {data.highlights[0]}{" "}
              <span className="text-2xl text-primary uppercase tracking-wider items-center">
                |
              </span>{" "}
              {data.highlights[1]}{" "}
              <span className="text-2xl text-primary uppercase tracking-wider items-center">
                |
              </span>{" "}
              {data.highlights[2]}
            </span>

            <p className="text-gray-600 text-base text-center w-[80%] m-auto">
              Experience a blessed Umrah journey with our 3 Star Umrah Packages,
              designed for comfort and affordability without compromising on
              quality.
            </p>
          </div>

          {/* Luxury_Assuring_Card_Details */}
          <div className="flex flex-col gap-14 pt-5">
            {data.LuxuryAssuringCardData.map((section) => (
              <div key={section.id} className="space-y-6">
                {/* Section Heading */}
                <h2 className="text-2xl font-bold text-center text-primary">
                  {section.heading}
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.cards.map((card) => (
                    <LuxuryAssuringCard key={card.id} card={card} />
                  ))}
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
