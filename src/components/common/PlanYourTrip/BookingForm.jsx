"use client";

import { Formik, Form } from "formik";
import bookingSchema from "@/schemas/common/bookingSchema";
import ArrowButton from "@/components/ui/ArrowButton";
import FormField from "@/components/common/FormField";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";
import { data } from "@/lib/contactInfo";

const bookingFields = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "First name",
    grid: "",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Last name",
    grid: "",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: data.inquiryEmail,
    grid: "",
  },
  {
    label: "Phone",
    name: "phone",
    placeholder: data.PhoneNumber,
    grid: "",
  },
  {
    label: "Trip details",
    name: "instructions",
    as: "textarea",
    placeholder: "Destination, dates, number of travellers, budget…",
    grid: "sm:col-span-2",
    className: "h-32 resize-none",
  },
];

const BookingForm = ({ inputBg }) => {
  const { status, error, submit } = useFormSubmit("planYourTrip");

  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        instructions: "",
        _hp: "",
      }}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bookingFields.map((field) => (
              <FormField
                key={field.name}
                {...field}
                wrapperClass={field.grid}
                inputBg={inputBg}
              />
            ))}
          </div>

          <HoneypotField />

          <div className="flex flex-col items-start gap-4 pt-6">
            <ArrowButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send enquiry"}
            </ArrowButton>
            <FormStatus status={status} error={error} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
