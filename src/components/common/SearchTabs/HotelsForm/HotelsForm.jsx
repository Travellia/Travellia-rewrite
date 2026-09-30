"use client";

import { Formik, Form } from "formik";
import { Mail, Phone, UserRound } from "lucide-react";
import hotelSchema from "@/schemas/SearchTabs/Hotels/hotelSchema";
import HotelFormFields from "./HotelFormFields";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";
import { DetailsRow } from "../fields";

// The hotel schema keeps the contact details on the (single) route.
const DETAIL_FIELDS = [
  { name: "routes.0.name", label: "Name", icon: UserRound, placeholder: "Full name", autoComplete: "name" },
  { name: "routes.0.contact", label: "Phone", icon: Phone, type: "tel", placeholder: "Phone number", autoComplete: "tel" },
  { name: "routes.0.email", label: "Email", icon: Mail, type: "email", placeholder: "you@example.com", autoComplete: "email" },
];

const HotelsForm = () => {
  const { status, error, submit } = useFormSubmit("hotelSearch");

  // Handle Submit
  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  return (
    <Formik
      initialValues={{
        routes: [
          {
            from: "",
            to: "",
            depart: "",
            return: "",
            room: "1",
            adult: "1",
            child: "0",
            infant: "0",
            name: "",
            email: "",
            contact: "",
          },
        ],
        _hp: "",
      }}
      validationSchema={hotelSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="relative flex flex-col gap-7">
          <HotelFormFields />

          <HoneypotField />

          <DetailsRow
            fields={DETAIL_FIELDS}
            submitLabel="Search hotels"
            isSubmitting={isSubmitting}
            status={status}
            error={error}
          />
        </Form>
      )}
    </Formik>
  );
};

export default HotelsForm;
