"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { Mail, Phone, UserRound } from "lucide-react";

import returnSchema from "@/schemas/SearchTabs/Flights/returnSchema";
import oneWaySchema from "@/schemas/SearchTabs/Flights/oneWaySchema";
import multiCitySchema from "@/schemas/SearchTabs/Flights/multiCitySchema";
import FormFields, { EMPTY_ROUTE } from "./FormFields";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";
import { DetailsRow } from "../fields";
import { cn } from "@/lib/utils";

// Data
const flightTypes = [
  { label: "Return", value: "return" },
  { label: "One way", value: "oneway" },
  { label: "Multi-city", value: "multicity" },
];

const DETAIL_FIELDS = [
  { name: "name", label: "Name", icon: UserRound, placeholder: "Full name", autoComplete: "name" },
  { name: "contact", label: "Phone", icon: Phone, type: "tel", placeholder: "Phone number", autoComplete: "tel" },
  { name: "email", label: "Email", icon: Mail, type: "email", placeholder: "you@example.com", autoComplete: "email" },
];

const FlightsForm = () => {
  const [flightType, setFlightType] = useState("return");
  const { status, error, submit } = useFormSubmit("flightSearch");

  // Handle Submit
  const handleSubmit = async (values, { resetForm }) => {
    // flightType lives in component state, not the form — send it along so the
    // server picks the matching schema and the email says which trip type it was.
    // Travellers are picked once, on the first leg; every leg carries them.
    const { adult, child, infant } = values.routes[0];
    const routes = values.routes.map((route) => ({ ...route, adult, child, infant }));
    const sent = await submit({ ...values, routes, flightType }, { hp: values._hp });
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
        routes: [{ ...EMPTY_ROUTE }],
        name: "",
        email: "",
        contact: "",
        _hp: "",
      }}
      validationSchema={getSchema()}
      onSubmit={handleSubmit}
    >
      {({ values, resetForm, setFieldValue, isSubmitting }) => {
        // handle flight type change + reset logic
        const handleFlightTypeChange = (type) => {
          setFlightType(type);

          // Reset routes when switching from multicity
          if (type !== "multicity") {
            resetForm({
              values: { ...values, routes: [{ ...EMPTY_ROUTE }] },
            });
          } else if (values.routes.length < 2) {
            // Multi-city needs at least two flights.
            setFieldValue("routes", [...values.routes, { ...EMPTY_ROUTE }]);
          }
        };

        return (
          <Form className="relative flex flex-col gap-7">
            {/* Trip type */}
            <fieldset className="-mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 px-1 sm:gap-x-6 sm:px-2">
              <legend className="sr-only">Trip type</legend>
              {flightTypes.map((type) => {
                const active = flightType === type.value;
                return (
                  <label key={type.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="flightType"
                      value={type.value}
                      checked={active}
                      onChange={() => handleFlightTypeChange(type.value)}
                      className="peer sr-only"
                    />
                    <span
                      className={cn(
                        "flex items-center gap-2 rounded-full py-1 text-sm font-semibold transition peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2",
                        active ? "text-ink" : "text-ink/60 hover:text-ink"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "grid size-4 place-items-center rounded-full border-2 transition",
                          active ? "border-ink" : "border-ink/25"
                        )}
                      >
                        {active && <span className="size-1.5 rounded-full bg-ink" />}
                      </span>
                      {type.label}
                    </span>
                  </label>
                );
              })}
            </fieldset>

            {/* Form */}
            <FormFields flightType={flightType} />

            <HoneypotField />

            <DetailsRow
              fields={DETAIL_FIELDS}
              submitLabel="Search flights"
              isSubmitting={isSubmitting}
              status={status}
              error={error}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightsForm;
