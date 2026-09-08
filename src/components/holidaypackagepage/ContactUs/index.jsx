"use client";

import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import { Formik, Form } from "formik";
import BookingDetails from "./BookingDetails";
import { Button } from "@/components/ui/button";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import holidayContactSchema from "@/schemas/holidayPackage/holidayContactSchema";
import useFormSubmit from "@/hooks/useFormSubmit";

// `css` keeps each card in its original grid slot across the three breakpoints.
const BookingDetails_Data = [
  {
    id: 1,
    title: "Leaving From",
    name: "from",
    placeholder: "London (LON)",
    css: "col-span-1 row-start-1 sm:col-span-1 sm:row-start-1 xl:col-span-3 xl:row-start-1",
  },
  {
    id: 2,
    title: "Going To",
    name: "to",
    placeholder: "City or code",
    css: "col-span-1 row-start-2 sm:col-span-1 sm:row-start-1 xl:col-span-3 xl:row-start-1",
  },
  {
    id: 3,
    title: "Travellers",
    name: "travellers",
    placeholder: "2 Adults, 1 Child",
    css: "col-span-1 row-start-3 sm:col-span-1 sm:row-start-1 xl:col-span-3 xl:row-start-1",
  },
  {
    id: 4,
    title: "Depart",
    name: "depart",
    type: "date",
    css: "col-span-1 row-start-4 sm:col-span-1 sm:row-start-2 xl:col-span-2 xl:row-start-1",
  },
  {
    // Was mislabelled "Depart" — this is the return leg.
    id: 5,
    title: "Return",
    name: "return",
    type: "date",
    css: "col-span-1 row-start-5 sm:col-span-1 sm:row-start-2 xl:col-span-2 xl:row-start-1",
  },
  {
    id: 6,
    title: "Passenger Name",
    name: "passengerName",
    placeholder: "Full name",
    css: "col-span-1 row-start-6 sm:col-span-1 sm:row-start-2 xl:col-span-3 xl:row-start-2",
  },
  {
    id: 7,
    title: "Email Address",
    name: "email",
    type: "email",
    placeholder: "you@example.com",
    css: "col-span-1 row-start-7 sm:col-span-1 sm:row-start-3 xl:col-span-3 xl:row-start-2",
  },
  {
    id: 8,
    title: "Contact Number",
    name: "contact",
    type: "tel",
    placeholder: "07700 900123",
    css: "col-span-1 row-start-8 sm:col-span-1 sm:row-start-3 xl:col-span-3 xl:row-start-2",
  },
  {
    id: 9,
    title: "Transportation",
    name: "transportation",
    options: ["Yes", "No"],
    css: "col-span-1 row-start-9 sm:col-span-1 sm:row-start-3 xl:col-span-4 xl:row-start-2",
  },
];

const BookingPage = () => {
  const { status, error, submit } = useFormSubmit("holidayPackageContact");

  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  return (
    <section className="">
      <ContentLayoutWrapper className="relative pb-0 rounded-2xl shadow-2xl z-1 bg-white h-auto border border-primary before:absolute before:inset-0 before:bg-[url('/holidayPackage/ContactUs/bg-3.png')] before:bg-center before:bg-cover before:opacity-20 sm:before:opacity-40 before:content-[''] before:z-[-1]">
        <Formik
          initialValues={{
            from: "",
            to: "",
            travellers: "",
            depart: "",
            return: "",
            passengerName: "",
            email: "",
            contact: "",
            transportation: "",
            _hp: "",
          }}
          validationSchema={holidayContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6 sm:gap-4 lg:gap-8 items-center -translate-y-10 relative">
              {/* Heading Box */}
              <div className="border bg-white border-y-amber-400 sm:border-none relative flex items-center justify-center gap-3 w-[95%] sm:w-[80%] m-auto px-4 py-3 rounded-lg">
                <Image
                  src="/holidayPackage/ContactUs/bag.png"
                  alt=""
                  aria-hidden="true"
                  width={25}
                  height={25}
                  loading="lazy"
                />
                <h1 className="text-sm text-center sm:text-xl">
                  Contact Us to Book your Holiday Package
                </h1>
              </div>

              {/* Booking Details Grid */}
              <div className="relative grid grid-cols-1 grid-rows-9 sm:grid-cols-3 sm:grid-rows-3 xl:grid-cols-13 lg:grid-rows-2 gap-4 w-full">
                {BookingDetails_Data.map((card) => (
                  <div key={card.id} className={card.css}>
                    <BookingDetails data={card} />
                  </div>
                ))}
              </div>

              <HoneypotField />

              <Button
                type="submit"
                className="btn-main"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Submit Now"}
              </Button>

              <FormStatus status={status} error={error} className="max-w-xl" />
            </Form>
          )}
        </Formik>
      </ContentLayoutWrapper>
    </section>
  );
};

export default BookingPage;
