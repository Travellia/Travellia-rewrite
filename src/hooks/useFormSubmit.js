"use client";

import { useCallback, useState } from "react";
import { submitForm } from "@/lib/forms/submitForm";

/**
 * Submit state for a form, shared by every form on the site.
 *
 * Usage inside a Formik onSubmit:
 *   const { status, error, submit } = useFormSubmit("planYourTrip");
 *   const handleSubmit = async (values, { resetForm }) => {
 *     if (await submit(values)) resetForm();
 *   };
 *
 * Returning a promise is enough for Formik to manage `isSubmitting` itself.
 */
export function useFormSubmit(formId) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const submit = useCallback(
    async (values, { hp = "" } = {}) => {
      setStatus("sending");
      setError("");

      const result = await submitForm({ formId, values, hp });

      if (result.ok) {
        setStatus("success");
        return true;
      }

      // Deliberately not clearing the form here — the caller only resets on
      // success, so whatever the visitor typed survives a failure.
      setStatus("error");
      setError(result.message);
      return false;
    },
    [formId],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError("");
  }, []);

  return { status, error, submit, reset, isSending: status === "sending" };
}

export default useFormSubmit;
