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
  inputBg = "bg-sand/60",
}) => {
  return (
    <div className={cn("w-full", wrapperClass)}>
      <label
        className={cn(
          "mb-2 block pl-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/60",
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
        className={cn(
          "w-full rounded-2xl border border-line px-5 py-4 text-ink outline-none transition placeholder:text-ink/40 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40",
          inputBg,
          className,
        )}
      />

      <ErrorMessage
        name={name}
        component="p"
        className={cn("pl-1 pt-2 text-sm text-red-600", errorClass)}
      />
    </div>
  );
};

export default FormField;
