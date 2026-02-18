"use client";

import { Formik, Form } from "formik";
import hotelSchema from "@/schemas/SearchTabs/Hotels/hotelSchema";
import { Button } from "@/components/ui/button";
import HotelFormFields from "./HotelFormFields";

const FlightsForm = () => {
  // Handle Submit
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data", values);
    resetForm();
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
            adult: "0",
            child: "0",
            infant: "0",
            name: "",
            email: "",
            contact: "",
          },
        ],
      }}
      validationSchema={Schema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitted Data", values);
        resetForm();
      }}
    >
      {({ values, setFieldValue, resetForm, isValid, isSubmitting }) => {
        return (
          <Form className="flex flex-col gap-7">
            {/* Form */}
            <HotelFormFields />

            <Button
              type="submit"
              className="btn-main self-center"
              disabled={!isValid || isSubmitting}
            >
              Search
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightsForm;
