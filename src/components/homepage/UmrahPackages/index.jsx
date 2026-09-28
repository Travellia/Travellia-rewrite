import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import UmrahPackageCard from "./PackageCard";

const COMMON_FEATURES = [
  "Return flights from London, Manchester, Birmingham, Bradford and Scotland",
  "Umrah visa and hotels in Makkah and Madinah",
  "Transport and Ziyarat included",
];

const UMRAH_PACKAGES = [
  {
    id: 1,
    title: "3-Star Umrah Packages",
    rating: 3,
    features: [
      "7 nights (4 Makkah + 3 Madinah), with 10 and 14 night options",
      "Makkah: Batoul Ajyad, Elaf Ajyad or Emaar Elite",
      "Madinah: Al Eiman Al Manar, Diyaar Al Nakheel or Emaar Taibah",
      ...COMMON_FEATURES,
    ],
    price: 695,
    href: "/hajj-umrah/3-star-7-nights",
    image: "/home/umrah-package/package1.png",
    alt: "3-Star Umrah Package",
  },
  {
    id: 2,
    title: "4-Star Umrah Packages",
    rating: 4,
    features: [
      "7 nights (4 Makkah + 3 Madinah), with 10 and 14 night options",
      "Makkah: Al Kiswah Towers, Emaar Grand or Sheraton Jabal Al Kaaba",
      "Madinah: Al Mukhtara International, Dar Al Naem or Saja Al Madinah",
      ...COMMON_FEATURES,
    ],
    price: 765,
    href: "/hajj-umrah/4-star-7-nights",
    image: "/home/umrah-package/package2.png",
    alt: "4-Star Umrah Package",
  },
  {
    id: 3,
    title: "5-Star Umrah Packages",
    rating: 5,
    features: [
      "7 nights (4 Makkah + 3 Madinah), with 10 and 14 night options",
      "Makkah: Al Marwa Rayhaan, Anjum Makkah or Swissôtel Makkah",
      "Madinah: Anwar Al Madinah Mövenpick, InterContinental Dar Al Hijra or Pullman Zamzam",
      ...COMMON_FEATURES,
    ],
    price: 885,
    href: "/hajj-umrah/5-star-7-nights",
    image: "/home/umrah-package/package3.png",
    alt: "5-Star Umrah Package",
  },
];

const index = () => {
  return (
    <section className="py-15 min-h-screen relative">
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <Image
          src={"/home/umrah-package/Madina.jpg"}
          alt="Madina"
          fill
          sizes="50vw"
          className={"aspect-auto object-cover"}
        />
      </div>
      <div className="absolute top-0 left-0 w-2/10 h-4/10 z-1">
        <Image src={"/shapes/leaf.png"} alt="leaf" fill sizes="20vw" />
      </div>
      <div className="absolute -bottom-5 right-3 w-2/10 h-4/10 z-1 rotate-180">
        <Image fill src={"/shapes/leaf.png"} alt="leaf" sizes="20vw" />
      </div>
      <div className="absolute top-10 left-0 z-1 h-1/2 w-full">
        <Image src={"/shapes/paper-plane.png"} alt="paper-plane" fill sizes="100vw" />
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <Image
          src={"/home/umrah-package/Makkah.jpg"}
          alt="Makkah"
          fill
          sizes="50vw"
          className={" aspect-auto object-cover"}
        />
      </div>
      <div className="bg-white/80 backdrop-blur-md w-full h-full absolute left-0 top-0" />

      <ContentLayoutWrapper
        className={
          "flex flex-col justify-between items-center gap-6 relative z-2"
        }
      >
        <div className="text-center">
          <h3 className="text-xl text-gray-800 uppercase">
            3, 4 &amp; 5 star
          </h3>
          <h1 className="text-5xl text-primary font-bold uppercase tracking-wider">
            umrah package
          </h1>
        </div>

        <div className="bg-primary h-0.75 w-2/10 mx-auto" />

        <div className="flex flex-col gap-3">
          <span className="text-gray-700 uppercase text-sm md:text-2xl lg:text-3xl mx-auto tracking-wider">
            affordable{" "}
            <span className="text-2xl text-primary uppercase tracking-wider">
              |
            </span>{" "}
            comfortable{" "}
            <span className="text-2xl text-primary uppercase tracking-wider">
              |
            </span>{" "}
            spiritual journey
          </span>

          <p className="text-gray-600 text-base text-center w-[80%] m-auto">
            Experience a blessed Umrah journey with our 3, 4 and 5 Star Umrah
            Packages, designed for comfort and affordability without
            compromising on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {UMRAH_PACKAGES.map((pkg) => (
            <UmrahPackageCard key={pkg.id} data={pkg} />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
