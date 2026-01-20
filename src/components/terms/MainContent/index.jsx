import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import termsList from "./termsList";
import TermCard from "./TermCard";
import BookNow from "@/components/common/BookNow";
import Image from "next/image";

const imageData = {
  image: "/holidayPackage/BookNow/bgImage.png",
  alt: "resturant",
};

const index = () => {
  const firstHalf = termsList.slice(0, 11);
  const secondHalf = termsList.slice(11);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col gap-10 items-center  m-auto text-center">
        {/* Header */}
        <div className="relative w-full ">
          <Image
            src="/terms/MainContent/top-flower.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[16%] h-auto absolute top-0"
          />
          <Image
            src="/terms/MainContent/plan.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[8%] hidden lg:block  lg:-translate-x-22 xl:-translate-x-35 lg:-translate-y-28  xl:-translate-y-34 h-auto absolute right-0 top-1/2"
          />
          <Image
            src="/terms/MainContent/DashLine.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[8%] -translate-y-15 h-auto absolute right-0 top-1/2"
          />
          <Image
            src="/terms/MainContent/bottom-flower.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[16%]  h-auto absolute right-0 bottom-0 lg:translate-x-20  xl:translate-x-30 "
          />
          <Image
            src="/terms/MainContent/bridge.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[35%] h-auto absolute  bottom-0"
          />
          <ContentLayoutWrapper className="relative flex flex-col gap-5">
            <div className=" font-sans flex flex-col gap-2 items-center font-normal  mx-auto">
              <h1 className="text-3xl md:text-5xl text-primary tracking-wider  ">
                FLIGHT TICKETS, HOLIDAY
              </h1>
              <h2 className="text-xl w-full md:text-4xl tracking-wider md:w-[85%]">
                PACKAGES & DEPOSITS – NON-REFUNDABLE & NON-CHANGEABLE (Terms &
                Conditions Apply)
              </h2>
              <p className=" pt-5 w-full md:w-[72%]">
                All flight tickets, holiday/umrah bookings, hotel bookings, and
                deposits made through Travellia Limited are strictly
                non-refundable and non-changeable, unless otherwise stated. This
                includes cancellations, no-shows, and date or name changes.{" "}
                <br />
                Once booked, tickets and packages are non-transferable and
                non-re-routable. If booked with a deposit, please note that
                fares and taxes are subject to change until full payment is made
                and tickets are issued. Travellia Limited is not liable for any
                price increases, and any difference must be paid by the
                customer. <br />
                Deposits are non-refundable under all circumstances.
              </p>
            </div>

            {/* firstHalf Terms List */}
            <TermsList
              terms={firstHalf}
              className="w-full md:w-[72%] mx-auto"
            />
          </ContentLayoutWrapper>
        </div>

        {/* Booking Component */}
        <div className="w-full">
          <BookNow data={imageData} />
        </div>

        {/* seconHalf Terms List */}
        <div className="relative w-full">
          <Image
            src="/terms/MainContent/plan2.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[16%] h-auto absolute md:-translate-x-10 lg:-translate-x-20 bottom-2/3"
          />
          <Image
            src="/terms/MainContent/bag.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-[12%] h-auto absolute right-0 lg:translate-x-15 xl:translate-x-30  bottom-1/2"
          />
          <Image
            src="/terms/MainContent/planwithline.png"
            alt="top-flower"
            width={1000}
            height={1000}
            className="w-full h-auto absolute right-0 top-2/3 translate-x-10 lg:translate-y-40 xl:translate-y-0  lg:top-1/2"
          />
          <ContentLayoutWrapper>
            <TermsList
              terms={secondHalf}
              className="w-full md:w-[72%] mx-auto"
            />
          </ContentLayoutWrapper>
        </div>
      </div>
    </section>
  );
};

export default index;

const TermsList = ({ terms, className = "" }) => (
  <div className={`flex flex-col gap-5 ${className}`}>
    {terms.map((term) => (
      <TermCard key={term.id} data={term} />
    ))}
  </div>
);
