import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import UmrahPackageCard from "./PackageCard";

const UMRAH_PACKAGES = [
  {
    id: 1,
    title: "5-Star December Umrah Packages for 5 Nights - All-inclusive",
    rating: 5,
    features: [
      "5 nights in Makkah at Jabbal Omar Marriott Hotel",
      "5 Nights in Medina at Al Eiman Royal Madinah",
      "Flights from London, Manchester, birmingham, Bradford, and Scotland.",
      "Hotel in Makkah and Medina, Visa",
      "Return Flights, Transport, and Ziyarat included.",
    ],
    price: 1090,
    image: "/home/umrah-package/package1.jpg",
    alt: "Umrah Package 1",
  },
  {
    id: 2,
    title: "5-Star December Umrah Packages for 5 Nights - All-inclusive",
    rating: 5,
    features: [
      "5 nights in Makkah at Jabbal Omar Marriott Hotel",
      "5 Nights in Medina at Al Eiman Royal Madinah",
      "Flights from London, Manchester, birmingham, Bradford, and Scotland.",
      "Hotel in Makkah and Medina, Visa",
      "Return Flights, Transport, and Ziyarat included.",
    ],
    price: 1090,
    image: "/home/umrah-package/package2.jpg",
    alt: "Umrah Package 2",
  },
  {
    id: 3,
    title: "5-Star December Umrah Packages for 5 Nights - All-inclusive",
    rating: 5,
    features: [
      "5 nights in Makkah at Jabbal Omar Marriott Hotel",
      "5 Nights in Medina at Al Eiman Royal Madinah",
      "Flights from London, Manchester, birmingham, Bradford, and Scotland.",
      "Hotel in Makkah and Medina, Visa",
      "Return Flights, Transport, and Ziyarat included.",
    ],
    price: 1090,
    image: "/home/umrah-package/package3.jpg",
    alt: "Umrah Package 3",
  },
];

const index = () => {
  return (
    <section className="pt-5 min-h-screen relative">
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <Image
          src={"/home/umrah-package/Madina.jpg"}
          fill
          className={"aspect-auto object-cover"}
        />
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <Image
          src={"/home/umrah-package/Makkah.jpg"}
          fill
          className={" aspect-auto object-cover"}
        />
      </div>
      <div className="bg-white/70 backdrop-blur-sm w-full h-full absolute left-0 top-0" />

      <ContentLayoutWrapper
        className={
          "flex flex-col justify-between items-center gap-6 relative z-2"
        }
      >
        <div className="text-center">
          <h3 className="text-xl text-gray-800 uppercase">
            luxury assuring 5 star
          </h3>
          <h1 className="text-5xl text-primary font-bold uppercase tracking-wider">
            umrah package
          </h1>
        </div>

        <div className="bg-primary h-0.75 w-2/10 mx-auto" />

        <div className="flex flex-col gap-3">
          <pre className="text-gray-500 uppercase text-3xl mx-auto tracking-wider">
            affordable | comfortable |{" "}
            <span className="tracking-normal">spirtual journey </span>
          </pre>
          <p className="text-gray-400 text-base">
            Experience a blessed Umrah journey with our 3 Star Umrah Packages,
            designed for comfort and affordability without compromising on
            quality.
          </p>
        </div>

        <div className="flex gap-3">
          {UMRAH_PACKAGES.map((pkg) => (
            <UmrahPackageCard key={pkg.id} data={pkg} />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
