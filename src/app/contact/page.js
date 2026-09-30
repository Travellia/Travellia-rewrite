import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import Welcome from "@/components/common/Welcome";
import ContactFooterCard from "@/components/contact/ContactFooterCard";
import Contact_footer_List from "@/lib/data/ContactFooterList";
import React from "react";

const CONTACT_FOOTER_LIST = Contact_footer_List;

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/contact/Image.webp" }],
    heading: "Contact",
    title: (
      <>
        Let&apos;s plan <em>your trip.</em>
      </>
    ),
    subtitle:
      "Call, email or send us a few details. A real travel expert will get back to you.",
  };

  return (
    <section className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-32 md:gap-28">
        <ContentLayoutWrapper>
          <ContactFooterCard data={CONTACT_FOOTER_LIST} />
        </ContentLayoutWrapper>
        <PlanYourTrip
          titleLines1={"Leave us a little info,"}
          titleLines2={"and we'll be in touch."}
        />
      </div>
    </section>
  );
};

export default page;
