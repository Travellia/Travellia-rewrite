"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import bookingSchema from "@/schemas/common/bookingSchema";
import { Button } from "@/components/ui/button";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";

const BookingForm = ({ data }) => {
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
            <div>
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                {data.firstNameLabel}
              </label>
              <Field
                name={data.firstNameName}
                placeholder={data.firstNamePlaceholder}
                className="w-full p-5 bg-white rounded-md"
              />
              <ErrorMessage
                name={data.firstNameName}
                component="p"
                className="text-red-500 text-sm pl-5 pt-2 "
              />
            </div>

            <div>
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                {data.lastNameLabel}{" "}
              </label>
              <Field
                name={data.lastNameName}
                placeholder={data.lastNamePlaceholder}
                className="w-full p-5 bg-white rounded-md"
              />
              <ErrorMessage
                name={data.lastNameName}
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                {data.emailLabel}{" "}
              </label>
              <Field
                type={data.emailName}
                name={data.emailName}
                placeholder={data.emailPlaceholder}
                className="w-full p-5 bg-white rounded-md"
              />
              <ErrorMessage
                name={data.emailName}
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                {data.phoneLabel}{" "}
              </label>
              <Field
                name={data.phoneName}
                placeholder={data.phonePlaceholder}
                className="w-full p-5 bg-white rounded-md"
              />
              <ErrorMessage
                name={data.phoneName}
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              {data.messsgaeLabel}
            </label>
            <Field
              as="textarea"
              name={data.messsgaeName}
              placeholder={data.messsgaePlaceholder}
              className="w-full p-5 bg-white rounded-md h-40"
            />
            <ErrorMessage
              name={data.messsgaeName}
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          <HoneypotField />

          <div className="flex flex-col items-center gap-4 py-6">
            <Button type="submit" className="btn-main" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : data.button}
            </Button>
            <FormStatus status={status} error={error} className="max-w-xl" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
