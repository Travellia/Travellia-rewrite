import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Card } from "@/components/ui/card";
import React from "react";
import QuestionCard from "./QuestionCard";

const QUESTION_DATA = [
  {
    id: 1,
    question: "Can I book extra nights before or after my Umrah package?",
    answer:
      "Yes. Travellia can arrange pre- and post-package accommodation on an individual basis, subject to availability. Browse our handpicked hotels in Makkah and Madinah and our team will add the extra nights to your package.",
  },
  {
    id: 2,
    question: "Can I choose my hotel and room type?",
    answer:
      "Of course. Tell us your preferred hotel and our booking team will check availability, including single, double, triple and quad rooms, and happily include it in your customised Umrah package.",
  },
];

const index = () => {
  return (
    <section className="py-10">
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="heading">Do You Have Any Questions?</h1>
          <p className="para ">
            {" "}
            Find answers to common questions about our services and your holy
            journey below.
          </p>
        </div>
        <div className=" flex flex-col  md:flex-row gap-5">
          {QUESTION_DATA.map((card, index) => (
            <QuestionCard key={index} data={card} />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
