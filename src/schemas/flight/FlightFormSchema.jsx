import * as Yup from "yup";

const bookThePackageSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),

  phone: Yup.string()
    .matches(
      /^\+?\d{10,15}$/,
      "Phone number must be 10–15 digits and may start with +",
    )
    .required("Phone is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  depart: Yup.string()
    .typeError("Select depart data")
    .required("Departure date is required"),

  return: Yup.string()
    .typeError("Select return data")
    .required("Return date is required"),

  adult: Yup.number()
    .typeError("Select number of adults")
    .required("Select number of adults")
    .min(1, "At least 1 adult required"),

  child: Yup.number()
    .typeError("Select number of children")
    .required("Select number of children")
    .min(0, "Invalid number"),

  infant: Yup.number()
    .typeError("Select number of infants")
    .required("Select number of children")
    .min(0, "Invalid number"),

  instruction: Yup.string()
    .trim()
    .required("Please provide special instructions or additional information")
    .min(1, "Instructions cannot be empty"),

  subscribe: Yup.boolean().oneOf([true], "You must subscribe to continue"),

  confirmSubmit: Yup.boolean().oneOf(
    [true],
    "You must confirm before submitting",
  ),
});

export default bookThePackageSchema;
