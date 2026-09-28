import Image from "next/image";
import React from "react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import UmrahContactForm from "./UmrahContactForm";

const services = [
  { title: "VISA", image: "/umrahDetail/From/visa.png" },
  { title: "FLIGHTS", image: "/umrahDetail/From/flight.png" },
  { title: "TRANSPORTATION", image: "/umrahDetail/From/transportation.png" },
  { title: "ACCOMMODATION", image: "/umrahDetail/From/accomodation.png" },
  {
    title: "24/7 CUSTOMER SERVICE",
    image: "/umrahDetail/From/customer-service.png",
  },
];

const UmrahForm = () => {
  return (
    <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Package Summary */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Eyebrow>Every package includes</Eyebrow>
          <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-ink md:text-4xl">
            Your Umrah,
            <br />
            <em className="font-serif font-normal normal-case tracking-normal text-gold">
              fully arranged
            </em>
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-sand/60 p-4"
            >
              <span className="relative grid size-11 place-items-center rounded-full bg-white shadow-soft">
                <Image
                  src={service.image}
                  alt=""
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-ink">
                {service.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 rounded-card bg-ink p-6 text-white md:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Give us your details
          </p>
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
            Book your Umrah package
          </h3>
        </div>

        <UmrahContactForm />
      </div>
    </div>
  );
};

export default UmrahForm;
