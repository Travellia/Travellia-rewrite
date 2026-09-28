import BookingForm from "@/components/common/BookingForm";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { data } from "@/lib/contactInfo";
import React from "react";

const Form_Fileds = {
  firstNameLabel: "First Name",
  firstNameName: "firstName",
  firstNamePlaceholder: "Your First Name...",

  lastNameLabel: "Last Name",
  lastNameName: "lastName",
  lastNamePlaceholder: "Your Last Name...",

  emailLabel: "Your Email",
  emailName: "email",
  emailPlaceholder: data.inquiryEmail,

  phoneLabel: "Phone Number",
  phoneName: "phone",
  phonePlaceholder: data.PhoneNumber,

  messsgaeLabel: "Booking Instructions",
  messsgaeName: "instructions",
  messsgaePlaceholder: "Booking Instructions...",

  button: "Submit Booking",
};

const Index = () => {
  return (
    <section id="plan-your-trip" className="bg-secondary scroll-mt-24">
      <ContentLayoutWrapper className="flex flex-col gap-5 items-center py-20">
        {/* Heading */}
        <div className="flex flex-col text-center heading-big">
          <h1 className="">PLAN YOUR TRIP</h1>
          <h1 className=" text-black pt-3">WITH US</h1>
        </div>

        {/* Form */}
        <div className="w-full">
          <BookingForm data={Form_Fileds} />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Index;
