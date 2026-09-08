import { format, parseISO, isValid } from "date-fns";
import { CITY_LIST as AIRPORT_LIST } from "@/components/common/citiesCode";
import { CITY_LIST as CITY_SHORTLIST } from "@/components/common/cities";

/**
 * Raw Formik values are not readable in an inbox: airports arrive as bare IATA
 * codes, dates as "2026-09-23", checkboxes as booleans. This turns a submitted
 * value object into ordered [{ label, value }] rows ready for buildNotification().
 */

// The curated shortlist wins on naming; the full IATA table is the fallback.
const cityByCode = new Map();
[...AIRPORT_LIST, ...CITY_SHORTLIST].forEach(({ city, code }) => {
  if (code) cityByCode.set(code.toUpperCase(), city);
});

const formatCity = (code) => {
  if (!code) return "";
  const raw = String(code).trim();
  const key = raw.toUpperCase();
  const city = cityByCode.get(key);
  if (city) return `${city} (${key})`;
  // Not a known IATA code — a free-text place name, most likely. Pass it
  // through untouched rather than upper-casing it into "DUBAI".
  return raw;
};

const formatDate = (value) => {
  if (!value) return "";
  const parsed = value instanceof Date ? value : parseISO(String(value));
  return isValid(parsed) ? format(parsed, "d MMM yyyy") : String(value);
};

const formatValue = (value, type) => {
  if (type === "airport" || type === "city") return formatCity(value);
  if (type === "date") return formatDate(value);
  if (type === "bool") return value ? "Yes" : "No";
  return value == null ? "" : String(value).trim();
};

/** A value worth putting in the email. Keeps `false` out, keeps "0" in. */
const isPresent = (raw, type) => {
  if (type === "bool") return raw === true;
  return raw !== undefined && raw !== null && String(raw).trim() !== "";
};

const rowsFor = (values, order, labels, types, transform) =>
  order.reduce((rows, key) => {
    const raw = values?.[key];
    const type = types?.[key];
    if (!isPresent(raw, type)) return rows;
    // A registry `transform` wins over type-based formatting, so a form can
    // relabel a raw value (e.g. "multicity" -> "Multi-city").
    const value = transform?.[key]
      ? String(transform[key](raw))
      : formatValue(raw, type);
    if (value === "") return rows;
    rows.push({ label: labels?.[key] ?? key, value });
    return rows;
  }, []);

/**
 * @param values  the submitted (already validated) form values
 * @param spec    the registry entry's { order, labels, types, route }
 * @returns       sections for buildNotification()
 *
 * `spec.route` describes the shape of entries inside a `routes` array. A single
 * route is flattened into the main section; several get "Route 1" / "Route 2"
 * headings, which is what multi-city flight searches produce.
 */
export function toSections(values, spec) {
  const { order = [], labels = {}, types = {}, transform, route } = spec;
  const sections = [];

  const topRows = rowsFor(values, order, labels, types, transform);

  const routes = Array.isArray(values?.routes) ? values.routes : [];
  if (route && routes.length) {
    const routeRows = routes.map((entry) =>
      rowsFor(
        entry,
        route.order,
        route.labels ?? labels,
        route.types ?? types,
        route.transform,
      ),
    );

    if (routes.length === 1) {
      // One leg reads better merged into the main block than under a heading.
      sections.push({ rows: [...routeRows[0], ...topRows] });
    } else {
      routeRows.forEach((rows, index) => {
        if (rows.length) sections.push({ heading: `Route ${index + 1}`, rows });
      });
      if (topRows.length) sections.push({ heading: "Contact", rows: topRows });
    }
    return sections;
  }

  if (topRows.length) sections.push({ rows: topRows });
  return sections;
}

/** Best-effort "who sent this", for the subject line and Reply-To. */
export function identify(values, spec) {
  const pick = (key) => {
    const direct = values?.[key];
    if (direct) return String(direct).trim();
    const nested = values?.routes?.[0]?.[key];
    return nested ? String(nested).trim() : "";
  };

  const first = pick("firstName") || pick("name") || pick("passengerName");
  const last = pick("lastName");
  const name = [first, last].filter(Boolean).join(" ");
  const email = pick("email");

  return { name: name || email || "", email: email || "" };
}
