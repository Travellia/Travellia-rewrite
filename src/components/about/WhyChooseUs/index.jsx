import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowIcon from "@/components/ui/ArrowIcon";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  const services = [
    {
      title: "WIDE VARIETY OF DESTINATIONS",
      description:
        "Flights, holidays and Umrah packages to destinations across Europe, Africa, Asia and the Middle East.",
      iconPath: "/about/WhyChooseUs/map.png",
    },
    {
      title: "HIGHLY QUALIFIED SERVICE",
      description:
        "Experienced consultants who handle every booking with care, from quote to confirmation.",

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
        "Comfortable, well-located hotels chosen for quality and value, including stays near the Haram.",

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
        "Round-the-clock support before, during and after your journey, whenever you need us.",

      iconPath: "/about/WhyChooseUs/24-hours.png",
    },
  ];
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Why"
          title={
            <>
              Choose <em>us.</em>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={index}
              className="group flex h-full flex-col gap-5 rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-lift"
            >
              <span className="grid size-16 place-items-center rounded-full bg-sand">
                <Image src={service.iconPath} alt="" width={34} height={34} className="object-contain" />
              </span>
              <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="flex-1 text-ink/65">{service.description}</p>
              <Link
                href="#plan-your-trip"
                className="flex items-center justify-between rounded-full bg-sand py-1.5 pl-5 pr-1.5 text-sm font-semibold text-ink transition-colors group-hover:bg-gold"
              >
                Book Now
                <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
                  <ArrowIcon className="size-4" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
