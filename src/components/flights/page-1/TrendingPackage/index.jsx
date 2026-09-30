import BookPackageCard from "@/components/common/BookPackageCard";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

// Fares from the latest offers list (GBP per person).
const PACKAGES_DATA = [
  {
    city: "Banjul",
    country: "The Gambia",
    priceLabel: "From",
    discountPrice: 535,
    description: "Return flights from London to Banjul (BJL).",
    image: "/flights/page-1/TrendingPackage/banjul.webp",
  },
  {
    city: "Dakar",
    country: "Senegal",
    priceLabel: "From",
    discountPrice: 460,
    description: "Return flights from London to Dakar (DSS).",
    image: "/flights/page-1/TrendingPackage/dakar.webp",
  },
  {
    city: "Freetown",
    country: "Sierra Leone",
    priceLabel: "From",
    discountPrice: 730,
    description: "Return flights from London to Freetown (FNA).",
    image: "/flights/page-1/TrendingPackage/freetown.webp",
  },
  {
    city: "Conakry",
    country: "Guinea",
    priceLabel: "From",
    discountPrice: 610,
    description: "Return flights from London to Conakry (CKY).",
    image: "/flights/page-1/TrendingPackage/conakry.webp",
  },
  {
    city: "Monrovia",
    country: "Liberia",
    priceLabel: "From",
    discountPrice: 495,
    description: "Return flights from London to Monrovia (ROB).",
    image: "/flights/page-1/TrendingPackage/monrovia.webp",
  },
  {
    city: "Abidjan",
    country: "Côte d'Ivoire",
    priceLabel: "From",
    discountPrice: 520,
    description: "Return flights from London to Abidjan (ABJ).",
    image: "/flights/page-1/TrendingPackage/abidjan.webp",
  },
];

const index = () => {
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Trendy · Our trending flight packages"
          title={
            <>
              Great fares,
              <br />
              <em>trending now.</em>
            </>
          }
          intro="Return fares from London, per person. Fares change daily, so send us your dates for a live quote."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES_DATA.map((data, index) => (
            <div key={data.city}>
              <BookPackageCard data={data} href="#plan-your-trip" />
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
