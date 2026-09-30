"use client";

import { Formik, Form } from "formik";
import { Mail, Phone, UserRound } from "lucide-react";
import umrahSchema from "@/schemas/SearchTabs/Umrah/umrahSchema";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";
import { DetailsRow } from "../fields";

const DETAIL_FIELDS = [
  { name: "firstName", label: "First name", icon: UserRound, placeholder: "Your first name", autoComplete: "given-name" },
  { name: "contact", label: "Phone", icon: Phone, type: "tel", placeholder: "Phone number", autoComplete: "tel" },
  { name: "email", label: "Email", icon: Mail, type: "email", placeholder: "you@example.com", autoComplete: "email" },
];

const UmrahContactForm = () => {
  const { status, error, submit } = useFormSubmit("umrahEnquiry");

  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        contact: "",
        email: "",
        _hp: "",
      }}
      validationSchema={umrahSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="relative">
          <HoneypotField />
          <DetailsRow
            fields={DETAIL_FIELDS}
            submitLabel="Book my Umrah"
            isSubmitting={isSubmitting}
            status={status}
            error={error}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UmrahContactForm;
