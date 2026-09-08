import returnSchema from "@/schemas/SearchTabs/Flights/returnSchema";
import oneWaySchema from "@/schemas/SearchTabs/Flights/oneWaySchema";
import multiCitySchema from "@/schemas/SearchTabs/Flights/multiCitySchema";
import hotelSchema from "@/schemas/SearchTabs/Hotels/hotelSchema";
import umrahSchema from "@/schemas/SearchTabs/Umrah/umrahSchema";
import bookingSchema from "@/schemas/common/bookingSchema";
import newsletterSchema from "@/schemas/common/newsletterSchema";
import bookThePackageSchema from "@/schemas/hotel/BookThePackageSchema";
import flightFormSchema from "@/schemas/flight/FlightFormSchema";
import holidayContactSchema from "@/schemas/holidayPackage/holidayContactSchema";

/**
 * Every form the site can submit, keyed by the `formId` the client posts.
 *
 * `order` doubles as the allowlist: the notification is built only from these
 * keys, so nothing a client invents can reach the inbox. `schema` reuses the
 * same yup objects the browser validates against — they import nothing but yup,
 * so they run unchanged on the server.
 */

const TRIP_TYPE = {
  oneway: "One way",
  return: "Return",
  multicity: "Multi-city",
};

const flightRoute = {
  order: ["from", "to", "depart", "return", "adult", "child", "infant"],
  labels: {
    from: "Flying From",
    to: "Flying To",
    depart: "Depart",
    return: "Return",
    adult: "Adults",
    child: "Children",
    infant: "Infants",
  },
  types: { from: "airport", to: "airport", depart: "date", return: "date" },
};

export const FORMS = {
  flightSearch: {
    name: "Flight Search",
    schema: (values) => {
      if (values?.flightType === "oneway") return oneWaySchema;
      if (values?.flightType === "multicity") return multiCitySchema;
      return returnSchema;
    },
    order: ["flightType", "category", "name", "email", "contact"],
    labels: {
      flightType: "Trip Type",
      category: "Cabin Class",
      name: "Name",
      email: "Email",
      contact: "Contact",
    },
    transform: { flightType: (value) => TRIP_TYPE[value] ?? value },
    route: flightRoute,
  },

  hotelSearch: {
    name: "Hotel Search",
    schema: hotelSchema,
    order: [],
    route: {
      order: [
        "from",
        "to",
        "depart",
        "return",
        "room",
        "adult",
        "child",
        "infant",
        "name",
        "email",
        "contact",
      ],
      labels: {
        from: "Where To",
        to: "Area",
        depart: "Check In",
        return: "Check Out",
        room: "Rooms",
        adult: "Adults",
        child: "Children",
        infant: "Infants",
        name: "Name",
        email: "Email",
        contact: "Contact",
      },
      types: { from: "city", to: "city", depart: "date", return: "date" },
    },
  },

  umrahEnquiry: {
    name: "Umrah Enquiry",
    schema: umrahSchema,
    order: ["firstName", "contact", "email"],
    labels: { firstName: "First Name", contact: "Contact", email: "Email" },
  },

  planYourTrip: {
    name: "Plan Your Trip",
    schema: bookingSchema,
    order: ["firstName", "lastName", "email", "phone", "instructions"],
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      instructions: "Booking Instructions",
    },
  },

  bookThePackage: {
    name: "Book The Package",
    schema: bookThePackageSchema,
    order: ["firstName", "email", "phone", "adult", "child", "message"],
    labels: {
      firstName: "First Name",
      email: "Email",
      phone: "Phone",
      adult: "Adults",
      child: "Children",
      message: "Message",
    },
  },

  flightEnquiry: {
    name: "Flight Enquiry",
    schema: flightFormSchema,
    order: [
      "firstName",
      "phone",
      "email",
      "depart",
      "return",
      "adult",
      "child",
      "infant",
      "instruction",
      "subscribe",
      "confirmSubmit",
    ],
    labels: {
      firstName: "First Name",
      phone: "Phone",
      email: "Email",
      depart: "Depart",
      return: "Return",
      adult: "Adults",
      child: "Children",
      infant: "Infants",
      instruction: "Instructions",
      subscribe: "Subscribed To Offers",
      confirmSubmit: "Confirmed Submission",
    },
    types: {
      depart: "date",
      return: "date",
      subscribe: "bool",
      confirmSubmit: "bool",
    },
  },

  newsletter: {
    name: "Newsletter Signup",
    schema: newsletterSchema,
    order: ["email"],
    labels: { email: "Email" },
  },

  holidayPackageContact: {
    name: "Holiday Package Booking",
    schema: holidayContactSchema,
    order: [
      "from",
      "to",
      "travellers",
      "depart",
      "return",
      "passengerName",
      "email",
      "contact",
      "transportation",
    ],
    labels: {
      from: "Leaving From",
      to: "Going To",
      travellers: "Travellers",
      depart: "Depart",
      return: "Return",
      passengerName: "Passenger Name",
      email: "Email Address",
      contact: "Contact Number",
      transportation: "Transportation",
    },
    types: { from: "city", to: "city", depart: "date", return: "date" },
  },
};

export const getForm = (formId) =>
  Object.prototype.hasOwnProperty.call(FORMS, formId) ? FORMS[formId] : null;

export const resolveSchema = (form, values) =>
  typeof form.schema === "function" ? form.schema(values) : form.schema;
