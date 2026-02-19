import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import Welcome from "@/components/common/Welcome";
import AddressCard from "@/components/contact/AddressCard";
import ContactFooterCard from "@/components/contact/ContactFooterCard";
import Contact_footer_List from "@/lib/data/ContactFooterList";
import Offices_List from "@/lib/data/OfficesList";
import React from "react";

const OFFICES_LIST = Offices_List;
const CONTACT_FOOTER_LIST = Contact_footer_List;

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/contact/Image.png" }],
    title: "CONTACT",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  return (
    <section className="relative flex flex-col gap-20 pb-20">
      <Welcome data={welcomeData} />
      <ContentLayoutWrapper className="flex flex-col gap-20">
        <AddressCard data={OFFICES_LIST} />
        <hr />
        <PlanYourTrip
          titleLines1={"LEAVE US A LITTLE INFO,"}
          titleLines2={"AND WE'LL BE ON TOUCH."}
          titleLines2Class={"text-primary"}
          sectionBg={"bg-white"}
          inputBg="bg-secondary"
          paddingY="py-0"
        />
        <hr />
        <ContactFooterCard data={CONTACT_FOOTER_LIST} />
      </ContentLayoutWrapper>
    </section>
  );
};

export default page;
