import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";

const ICONS = [MapPin, Phone, Mail];

const ContactFooterCard = ({ data }) => {
  return (
    <section className="mx-auto md:mx-0 grid md:grid-cols-2 md:gap-10 xl:grid-cols-3 gap-6">
      {data.map((item, index) => {
        const Icon = ICONS[index] ?? Phone;
        return (
          <div key={index} className="flex gap-5 items-start">
            <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary mt-1">
              <Icon className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-sm font-bold tracking-wide">{item[0]}</h1>
              <h1 className="text-lg font-bold text-primary leading-snug">
                {item[1]}
              </h1>
              {item[2] && <p className="text-gray-600 text-base">{item[2]}</p>}
              {item[3] && <p className="text-gray-600 text-base">{item[3]}</p>}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ContactFooterCard;
