import React from "react";
import { Field, ErrorMessage } from "formik";
import { cn } from "@/lib/utils";

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
  className,
  wrapperClass,
  labelClass,
  errorClass,
}) => {
  return (
    <div className={cn("w-full", wrapperClass)}>
      <label
        className={cn(
          "block text-sm font-bold pl-5 text-gray-500 mb-1",
          labelClass,
        )}
      >
        {label}
      </label>

      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        as={as}
        className={cn("w-full p-5 bg-white rounded-md", className)}
      />

      <ErrorMessage
        name={name}
        component="p"
        className={cn("text-red-500 text-sm pl-5 pt-2", errorClass)}
      />
    </div>
  );
};

export default FormField;
