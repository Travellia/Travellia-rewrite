import * as Yup from "yup";

const oneWaySchema = Yup.object({
  routes: Yup.array()
    .of(
      Yup.object({
        from: Yup.string().required("Departure city is required"),
        to: Yup.string().required("Arrival city is required"),
        depart: Yup.string().required("Departure date is required"),
      })
    )
    .min(1)
    .required(),

  adult: Yup.number()
    .min(1, "At least 1 adult")
    .required("Adults are required"),

  child: Yup.number().min(0).required("Children are required"),

  category: Yup.string()
    .oneOf(["ECONOMY", "PREMIUM", "BUSINESS CLASS"])
    .required("Cabin class is required"),
});

export default oneWaySchema;
