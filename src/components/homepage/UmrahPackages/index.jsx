import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import UmrahPackageCard from "./PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";

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
    image: "/home/umrah-package/package1.webp",
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
    image: "/home/umrah-package/package2.webp",
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
    image: "/home/umrah-package/package3.webp",
    alt: "5-Star Umrah Package",
  },
];

const index = () => {
  return (
    <section className="px-3 md:px-5">
      <div className="relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-frame bg-sand-deep py-16 md:py-24">
        {/* Makkah and Madinah, softened behind the cards */}
        <div className="absolute inset-0 -z-10 grid grid-cols-2 opacity-25">
          <div className="relative">
            <Image src="/home/umrah-package/Madina.webp" alt="" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/home/umrah-package/Makkah.webp" alt="" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand-deep via-sand-deep/85 to-sand-deep" />

        <ContentLayoutWrapper className="flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="3, 4 & 5 star · Umrah package"
              title={
                <>
                  Affordable. Comfortable.
                  <br />
                  <em>A spiritual journey.</em>
                </>
              }
            />
            <p className="max-w-sm text-ink/65">
              Experience a blessed Umrah journey with our 3, 4 and 5 Star Umrah
              Packages, designed for comfort and affordability without
              compromising on quality.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {UMRAH_PACKAGES.map((pkg) => (
              <UmrahPackageCard key={pkg.id} data={pkg} featured={pkg.rating === 5} />
            ))}
          </div>
        </ContentLayoutWrapper>
      </div>
    </section>
  );
};

export default index;
