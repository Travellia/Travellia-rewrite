import Image from "next/image";
import { Field, ErrorMessage } from "formik";

/**
 * One field of the holiday booking form, styled as the bordered card the
 * design uses. Previously this rendered static text; it now carries a real
 * input so the block can actually be submitted.
 */
const BookingDetails = ({ data }) => {
  const { title, name, type = "text", placeholder, options } = data;

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center relative border py-2 border-gray-300 rounded-xl bg-white/70">
        <div className="p-3 shrink-0">
          <Image
            src={"/holidayPackage/ContactUs/map-icon.png"}
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
        </div>

        <div className="flex flex-col min-w-0 flex-1 pr-3">
          <label
            htmlFor={`holiday-${name}`}
            className="text-[13px] text-gray-500"
          >
            {title}
          </label>

          {options ? (
            <Field
              as="select"
              id={`holiday-${name}`}
              name={name}
              className="text-sm font-bold bg-transparent outline-none w-full"
            >
              <option value="">Select…</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          ) : (
            <Field
              id={`holiday-${name}`}
              name={name}
              type={type}
              placeholder={placeholder}
              className="text-sm font-bold bg-transparent outline-none w-full placeholder:font-normal placeholder:text-gray-400"
            />
          )}
        </div>
      </div>

      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-xs pl-3"
      />
    </div>
  );
};

export default BookingDetails;
