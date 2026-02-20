import Image from "next/image";
import React from "react";
import UmrahContactForm from "./UmrahContactForm";

const services = [
  { title: "VISA", image: "/umrahDetail/From/visa.png" },
  { title: "FLIGHTS", image: "/umrahDetail/From/flight.png" },
  { title: "TRANSPORTATION", image: "/umrahDetail/From/transportation.png" },
  { title: "ACCOMODATION", image: "/umrahDetail/From/accomodation.png" },
  {
    title: "24/7 CUSTOMER SERVICE",
    image: "/umrahDetail/From/customer-service.png",
  },
];

const UmrahForm = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center gap-10 px-4 lg:px-20 py-10">
      {/* Package Summary */}
      <div className="flex-1 flex flex-col items-center text-center gap-10">
        {/* Title */}
        <div>
          <h1 className="text-3xl text-primary font-bold">PACKAGES</h1>
          <h1 className="text-3xl font-normal">SUMMARY</h1>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-8 w-full">
          {/* First Row (3 items) */}
          <div className="flex items-center justify-center gap-8">
            {services.slice(0, 3).map((service, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-sm">{service.title}</p>
                </div>
                {index !== 2 && <div className="w-px h-14 bg-gray-300"></div>}
              </React.Fragment>
            ))}
          </div>

          {/* Second Row (2 items) */}
          <div className="flex items-center justify-center gap-8">
            {services.slice(3).map((service, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-sm">{service.title}</p>
                </div>
                {index !== services.slice(3).length - 1 && (
                  <div className="w-px h-14 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5 w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-lg font-normal">GIVE US DETAIL HERE</h1>
          <h1 className="text-3xl text-primary font-bold">
            BOOK YOUR <br />
            UMRAH PACKAGE
          </h1>
        </div>

        <UmrahContactForm />
      </div>
    </div>
  );
};

export default UmrahForm;
