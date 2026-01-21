"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import returnSchema from "@/schemas/SearchTabs/Flights/returnSchema";
import oneWaySchema from "@/schemas/SearchTabs/Flights/oneWaySchema";
import multiCitySchema from "@/schemas/SearchTabs/Flights/multiCitySchema";
import { Button } from "@/components/ui/button";
import FormFields from "./FormFields";

// Data
const flightTypes = [
  { label: "Return", value: "return" },
  { label: "One Way", value: "oneway" },
  { label: "Multi City", value: "multicity" },
];

const flightCategories = ["ECONOMY", "PREMIUM", "BUSINESS CLASS"];

const FlightsForm = () => {
  const [flightType, setFlightType] = useState("return");

  // Handle Submit
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data", values);
    resetForm();
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
            adult: "",
            child: "",
          },
        ],
      }}
      validationSchema={getSchema()}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, resetForm }) => {
        // handle flight type change + reset logic
        const handleFlightTypeChange = (type) => {
          setFlightType(type);

          // Reset routes when switching from multicity
          if (type !== "multicity") {
            resetForm({
              values: {
                ...values,
                routes: [{ from: "", to: "", depart: "", return: "" }],
              },
            });
          }
        };

        return (
          <Form className="flex flex-col gap-7">
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
                    <span className="text-sm font-medium">{type.label}</span>
                  </label>
                ))}
              </div>

              <div className="justify-start min-w-45 flex sm:justify-end">
                <Select
                  value={values.category}
                  onValueChange={(value) => setFieldValue("category", value)}
                >
                  <SelectTrigger className="bg-gray-100 rounded-xl h-11">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" align="end">
                    {flightCategories.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Form */}
            <FormFields flightType={flightType} />

            <Button type="submit" className="btn-main self-center">
              Search Flights
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightsForm;
