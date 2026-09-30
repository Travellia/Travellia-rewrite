import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowButton from "@/components/ui/ArrowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
import BookPackageCard from "@/components/common/BookPackageCard";

const PACKAGES_DATA = [
  {
    days: 8,
    people: 25,
    city: "Los Angeles",
    country: "United States",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the Vibrant City of Los Angeles",
    image: "/home/trending-packages/los-angeles.webp",
  },
  {
    days: 8,
    people: 25,
    city: "Las Vegas",
    country: "United States",
    discountPrice: 499,
    oldPrice: 699,
    description: "Experience the Vibrant City of Las Vegas",
    image: "/home/trending-packages/las-vegas.webp",
  },
  {
    days: 8,
    people: 25,
    city: "Maldives",
    country: "Maldives",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the stunning islands of Maldives",
    image: "/home/trending-packages/maldives.webp",
  },
];

const index = () => {
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Trendy · Our trending tour packages"
            title={
              <>
                Let&apos;s make your next
                <br />
                holiday <em>amazing.</em>
              </>
            }
          />
          <ArrowButton href="/holidayPackages" tone="light">
            All holidays
          </ArrowButton>
        </div>

        {/* Staggered like "The Edit": the middle card sits lower */}
        <div className="grid gap-6 md:grid-cols-3">
          {PACKAGES_DATA.map((data, index) => (
            <div
              key={data.city}
              className={index === 1 ? "md:mt-16" : ""}
            >
              <BookPackageCard data={data} href="#plan-your-trip" />
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
