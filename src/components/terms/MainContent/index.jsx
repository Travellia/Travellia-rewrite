import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import termsList from "./termsList";
import TermCard from "./TermCard";
import BookNow from "@/components/common/BookNow";

const imageData = {
  image: "/holidayPackage/BookNow/bgImage.webp",
  alt: "",
};

const index = () => {
  const firstHalf = termsList.slice(0, 11);
  const secondHalf = termsList.slice(11);

  return (
    <section>
      <div className="flex flex-col gap-20 md:gap-28">
        {/* Header */}
        <div className="relative w-full ">
          <ContentLayoutWrapper>
          <div className="flex flex-col gap-8 rounded-frame border border-line bg-white p-6 shadow-soft md:p-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-5xl">
                Terms &amp; <em className="font-serif font-normal normal-case tracking-normal text-gold-accent">conditions</em>
              </h2>
              <h3 className="text-lg font-semibold uppercase tracking-wide text-gold-deep md:text-xl">
                Flight tickets, holiday packages & deposits – NON-REFUNDABLE & NON-CHANGEABLE (Terms &
                Conditions Apply)
              </h3>
              <p className="leading-relaxed text-ink/75">
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
            <TermsList terms={firstHalf} />
          </div>
          </ContentLayoutWrapper>
        </div>

        {/* Booking Component */}
        <div className="w-full">
          <BookNow data={imageData} />
        </div>

        {/* seconHalf Terms List */}
        <div className="relative w-full">
          <ContentLayoutWrapper>
          <div className="flex flex-col gap-8 rounded-frame border border-line bg-white p-6 shadow-soft md:p-12">
            <TermsList terms={secondHalf} />

            <p className="leading-relaxed text-ink/75">
              <span className="text-gold-deep font-bold text-2xl pr-2">›</span>{" "}
              <span className="font-bold text-ink">Flights</span> – If the airline offers
              a full or partial refund, the customer will be entitled to receive
              this refund, subject to Travellia Limited’s administration fee for
              processing. <br />
              <span className="text-gold-deep font-bold text-2xl pr-2">
                ›{" "}
              </span>{" "}
              <span className="font-bold text-ink">Hotels & Transport</span> – Refunds may
              not be provided, or may only be processed in accordance with the
              relevant supplier’s terms and conditions. Travellia Limited has no
              control over these decisions. <br /> This policy clearly sets out
              our limitation of liability in force majeure situations and
              explains the refund procedures applicable to flights, hotels, and
              transport services. <br />
              <br />
              <span className="font-bold">
                By making a booking with Travellia Limited, you confirm that you
                have read, understood, and agreed to all of the above Terms &
                Conditions, including those of our suppliers, and that these
                will apply to all members of your booking party.
              </span>
            </p>
          </div>
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
