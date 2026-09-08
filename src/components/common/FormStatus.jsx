"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import { data } from "@/lib/contactInfo";
import { cn } from "@/lib/utils";

/**
 * Confirmation / failure block shown under a form's submit button.
 * On failure it offers the phone number, because a visitor whose enquiry just
 * failed to send needs another way to reach us.
 */
const FormStatus = ({ status, error, className, successMessage }) => {
  if (status !== "success" && status !== "error") return null;

  const isSuccess = status === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 rounded-xl px-4 py-3 text-sm w-full",
        isSuccess
          ? "bg-green-50 text-green-800 border border-green-200"
          : "bg-red-50 text-red-800 border border-red-200",
        className,
      )}
    >
      <Icon className="w-5 h-5 shrink-0 mt-px" aria-hidden="true" />
      <div>
        {isSuccess ? (
          <p>
            {successMessage ||
              "Thanks — we've got your enquiry and will be in touch shortly."}
          </p>
        ) : (
          <p>
            {error || "We could not send that just now."} You can also call us
            on{" "}
            <a
              href={`tel:${data.PhoneNumber.replace(/\s+/g, "")}`}
              className="font-semibold underline"
            >
              {data.PhoneNumber}
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default FormStatus;
