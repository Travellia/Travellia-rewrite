"use client";

import { Formik, Form } from "formik";
import hotelSchema from "@/schemas/SearchTabs/Hotels/hotelSchema";
import { Button } from "@/components/ui/button";
import HotelFormFields from "./HotelFormFields";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";

const FlightsForm = () => {
  const { status, error, submit } = useFormSubmit("hotelSearch");

  // Handle Submit
  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  // Schemas
  const Schema = hotelSchema;

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
            adult: "0",
            child: "0",
            infant: "0",
            name: "",
            email: "",
            contact: "",
          },
        ],
        _hp: "",
      }}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, resetForm, isValid, isSubmitting }) => {
        return (
          <Form className="flex flex-col gap-7 relative">
            {/* Form */}
            <HotelFormFields />

            <HoneypotField />

            <Button
              type="submit"
              className="btn-main self-center"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Search"}
            </Button>
            <FormStatus status={status} error={error} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightsForm;
