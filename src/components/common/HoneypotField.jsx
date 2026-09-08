import { Field } from "formik";

/**
 * Bot bait. Hidden from people and from screen readers, so a filled-in value
 * means an automated submission — the API silently drops those.
 *
 * Add `_hp: ""` to the form's initialValues and pass `values._hp` as `hp`.
 */
const HoneypotField = () => (
  <div
    aria-hidden="true"
    className="absolute w-px h-px -left-[9999px] overflow-hidden"
  >
    <label>
      Company
      <Field name="_hp" type="text" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export default HoneypotField;
