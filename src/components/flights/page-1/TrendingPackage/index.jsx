import BookPackageCard from "@/components/common/BookPackageCard";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";

// Fares from the latest offers list (GBP per person).
const PACKAGES_DATA = [
  {
    city: "Banjul",
    country: "The Gambia",
    priceLabel: "From",
    discountPrice: 535,
    description: "Return flights from London to Banjul (BJL).",
    image: "/flights/page-1/TrendingPackage/banjul.jpg",
  },
  {
    city: "Dakar",
    country: "Senegal",
    priceLabel: "From",
    discountPrice: 460,
    description: "Return flights from London to Dakar (DSS).",
    image: "/flights/page-1/TrendingPackage/dakar.jpg",
  },
  {
    city: "Freetown",
    country: "Sierra Leone",
    priceLabel: "From",
    discountPrice: 730,
    description: "Return flights from London to Freetown (FNA).",
    image: "/flights/page-1/TrendingPackage/freetown.jpg",
  },
  {
    city: "Conakry",
    country: "Guinea",
    priceLabel: "From",
    discountPrice: 610,
    description: "Return flights from London to Conakry (CKY).",
    image: "/flights/page-1/TrendingPackage/conakry.jpg",
  },
  {
    city: "Monrovia",
    country: "Liberia",
    priceLabel: "From",
    discountPrice: 495,
    description: "Return flights from London to Monrovia (ROB).",
    image: "/flights/page-1/TrendingPackage/monrovia.jpg",
  },
  {
    city: "Abidjan",
    country: "Côte d'Ivoire",
    priceLabel: "From",
    discountPrice: 520,
    description: "Return flights from London to Abidjan (ABJ).",
    image: "/flights/page-1/TrendingPackage/abidjan.jpg",
  },
];

const index = () => {
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col ">
          <p className="heading-para">TRENDY</p>
          <h1 className="heading">OUR TRENDING</h1>
          <h1 className="heading">FLIGHT PACKAGES</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full self-center xl:w-[min(1100px,90vw)]">
          {PACKAGES_DATA.map((data, index) => (
            <BookPackageCard data={data} href="#plan-your-trip" key={index} />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
