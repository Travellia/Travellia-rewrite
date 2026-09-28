"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { Checkbox } from "@/components/ui/checkbox";

import returnSchema from "@/schemas/SearchTabs/Flights/returnSchema";
import oneWaySchema from "@/schemas/SearchTabs/Flights/oneWaySchema";
import multiCitySchema from "@/schemas/SearchTabs/Flights/multiCitySchema";
import { Button } from "@/components/ui/button";
import FormFields from "./FormFields";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";

// Data
const flightTypes = [
  { label: "Return", value: "return" },
  { label: "One Way", value: "oneway" },
  { label: "Multi City", value: "multicity" },
];

const FlightsForm = () => {
  const [flightType, setFlightType] = useState("return");
  const { status, error, submit } = useFormSubmit("flightSearch");

  // Handle Submit
  const handleSubmit = async (values, { resetForm }) => {
    // flightType lives in component state, not the form — send it along so the
    // server picks the matching schema and the email says which trip type it was.
    const sent = await submit({ ...values, flightType }, { hp: values._hp });
    if (sent) resetForm();
  };

  // Schemas
  const getSchema = () => {
    if (flightType === "oneway") return oneWaySchema;
    if (flightType === "multicity") return multiCitySchema;
    return returnSchema;
  };

  return (
    <Formik
      initialValues={{
        category: "",
        routes: [
          {
            from: "",
            to: "",
            depart: "",
            return: "",
            adult: "0",
            child: "0",
            infant: "0",
          },
        ],
        name: "",
        email: "",
        contact: "",
        _hp: "",
      }}
      validationSchema={getSchema()}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, resetForm, isValid, isSubmitting }) => {
        // handle flight type change + reset logic
        const handleFlightTypeChange = (type) => {
          setFlightType(type);

          // Reset routes when switching from multicity
          if (type !== "multicity") {
            resetForm({
              values: {
                ...values,
                routes: [
                  {
                    from: "",
                    to: "",
                    depart: "",
                    return: "",
                    adult: "0",
                    child: "0",
                    infant: "0",
                  },
                ],
              },
            });
          }
        };

        return (
          <Form className="flex flex-col gap-7 relative">
            {/* Flight Type */}
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between sm:items-end ">
              <div className="flex gap-4">
                {flightTypes.map((type) => (
                  <label
                    key={type.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Checkbox
                      checked={flightType === type.value}
                      onCheckedChange={() => handleFlightTypeChange(type.value)}
                    />
                    <span className="text-sm font-normal text-muted-foreground">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Form */}
            <FormFields flightType={flightType} />

            <HoneypotField />

            <Button
              type="submit"
              className="btn-main self-center"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Search Flights"}
            </Button>
            <FormStatus status={status} error={error} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightsForm;
