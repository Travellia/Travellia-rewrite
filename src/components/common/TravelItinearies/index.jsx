import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";

import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

import React from "react";
import Image from "next/image";
import BookPackageCard from "@/components/common/BookPackageCard";

const index = ({ data1, data2, href }) => {
  return (
    <section className="flex flex-col gap-20 md:gap-28">
      {/* Itineraries */}
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <SectionHeading eyebrow="Handpicked routes" title={data1.heading} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data1.packageDataCar.map((data, index) => (
            <div key={index} className={index === 1 ? "xl:mt-12" : ""}>
              <BookPackageCard data={data} href={href} />
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>

      {/* Referral programme */}
      <ContentLayoutWrapper>
        <div className="grid items-center gap-8 rounded-frame border border-line bg-white p-6 shadow-soft md:p-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-card bg-sand p-6">
            <Image
              src="/holidayPackage/TravelItinearies/discount-card.webp"
              alt="Travellia referral discount card"
              width={500}
              height={400}
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink md:text-4xl">
              {data2.heading}
            </h2>
            <p className="text-ink/65">{data2.description}</p>
            <ul className="flex flex-col gap-3">
              {data2.bullets.map((item) => (
                <li key={item.id} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-gold">
                    <Check className="size-3.5" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
