import * as Yup from "yup";

const holidayContactSchema = Yup.object({
  from: Yup.string().required("Leaving from is required"),
  to: Yup.string().required("Going to is required"),
  travellers: Yup.string().required("Travellers are required"),
  depart: Yup.string().required("Departure date is required"),
  return: Yup.string().required("Return date is required"),
  passengerName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Passenger name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string()
    .min(10, "Invalid contact number")
    .required("Contact number is required"),
  transportation: Yup.string()
    .oneOf(["Yes", "No"], "Select an option")
    .required("Select an option"),
});

export default holidayContactSchema;
