import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Card } from "@/components/ui/card";
import React from "react";
import QuestionCard from "./QuestionCard";

const QUESTION_DATA = [
  {
    id: 1,
    question: "Experience Hassle-Free Travel with Travellia  Travel.",
    answer:
      "With over 15 years of expertise in the travel industry, AlHaram Travel makes it easy for you to book pre- and post-accommodation on an individual basis, subject to availability. Browse through our wide selection of handpicked hotels, and consult with our hotel booking team to find out whether your preferred hotel offers single-bed room options. If it does, we’ll happily include it in your customized Umrah package.",
  },
  {
    id: 2,
    question: "Experience Hassle-Free Travel with Travellia  Travel.",
    answer:
      "With over 15 years of expertise in the travel industry, AlHaram Travel makes it easy for you to book pre- and post-accommodation on an individual basis, subject to availability. Browse through our wide selection of handpicked hotels, and consult with our hotel booking team to find out whether your preferred hotel offers single-bed room options. If it does, we’ll happily include it in your customized Umrah package.",
  },
];

const index = () => {
  return (
    <section className="">
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="heading">Do You Have Any Question?</h1>
          <p className="para ">
            {" "}
            Check out below to Find the Answers of your Questions that remove
            your doubts regarding our services as well as your holy journey!
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
