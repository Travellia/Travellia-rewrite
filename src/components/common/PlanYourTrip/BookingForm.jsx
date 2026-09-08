"use client";

import { Formik, Form } from "formik";
import bookingSchema from "@/schemas/common/bookingSchema";
import { Button } from "@/components/ui/button";
import FormField from "@/components/common/FormField";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";
import { data } from "@/lib/contactInfo";

const bookingFields = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "Your First name...",
    grid: "col-span-1",
  },
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Your Last name...",
    grid: "col-span-1",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: data.inquiryEmail,
    grid: "col-span-1",
  },
  {
    label: "Phone",
    name: "phone",
    placeholder: data.PhoneNumber,
    grid: "col-span-1",
  },
  {
    label: "Booking Instructions",
    name: "instructions",
    as: "textarea",
    grid: "col-span-2",
    className: "h-40",
  },
];

const BookingForm = ({ inputBg = "bg-white" }) => {
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
          <div className="grid grid-cols-2 gap-4 mb-4">
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

          <div className="flex flex-col items-center gap-4 py-6">
            <Button type="submit" className="btn-main" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Booking Instructions"}
            </Button>
            <FormStatus status={status} error={error} className="max-w-xl" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
