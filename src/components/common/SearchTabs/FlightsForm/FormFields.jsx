"use client";

import { useMemo, useState } from "react";
import { FieldArray, Field, getIn, useFormikContext } from "formik";
import { addDays, parseISO } from "date-fns";
import {
  ArrowLeftRight,
  CalendarDays,
  PlaneLanding,
  PlaneTakeoff,
  Plus,
  UsersRound,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AIRPORTS } from "@/lib/data/airports";
import {
  Bar,
  CounterSegment,
  DateSegment,
  Segment,
  SegmentFoot,
  SegmentLabel,
  segmentInnerClass,
} from "../fields";

const FLIGHT_CATEGORIES = [
  { value: "ECONOMY", label: "Economy" },
  { value: "PREMIUM", label: "Premium" },
  { value: "BUSINESS CLASS", label: "Business" },
];

export const EMPTY_ROUTE = {
  from: "",
  to: "",
  depart: "",
  return: "",
  adult: "1",
  child: "0",
  infant: "0",
};

const TRAVELLER_ROWS = [
  { key: "adult", label: "Adults", hint: "12+ years", min: 1 },
  { key: "child", label: "Children", hint: "2–11 years" },
  { key: "infant", label: "Infants", hint: "Under 2 years" },
];

const MIN_QUERY_LENGTH = 3;
const MAX_RESULTS = 50;

const airportByCode = new Map(AIRPORTS.map((item) => [item.code, item]));

// Exact IATA match first, then cities and airports that start with the query,
// then anything that merely contains it.
const searchAirports = (query) => {
  const q = query.trim().toLowerCase();
  if (q.length < MIN_QUERY_LENGTH) return [];

  const scored = [];
  for (const item of AIRPORTS) {
    const code = item.code.toLowerCase();
    const city = item.city.toLowerCase();
    const airport = item.airport.toLowerCase();

    let score;
    if (code === q) score = 0;
    else if (city.startsWith(q)) score = 1;
    else if (airport.startsWith(q)) score = 2;
    else if (city.includes(q) || airport.includes(q)) score = 3;
    else continue;

    scored.push({ item, score });
  }

  return scored
    .sort((a, b) => a.score - b.score)
    .slice(0, MAX_RESULTS)
    .map(({ item }) => item);
};

const CitySegment = ({ name, label, placeholder, icon, className, children }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [query, setQuery] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => searchAirports(query ?? ""), [query]);
  const isTyping = query !== null;
  const showList = isTyping && query.trim().length >= MIN_QUERY_LENGTH;
  const showHint = isTyping && !showList && query.trim().length > 0;
  const listId = `${name}-options`;

  return (
    <Segment className={className}>
      <Field name={name}>
        {({ field }) => {
          const selected = field.value
            ? airportByCode.get(field.value)
            : undefined;
          const value = selected
            ? `${selected.city} (${selected.code})`
            : field.value || "";

          const choose = (item) => {
            setFieldValue(name, item.code);
            setFieldTouched(name, true);
            setQuery(null);
          };

          const handleKeyDown = (e) => {
            if (!showList || results.length === 0) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActiveIndex((i) => Math.min(i + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActiveIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter") {
              e.preventDefault();
              choose(results[activeIndex]);
            } else if (e.key === "Escape") {
              setQuery(null);
            }
          };

          return (
            <>
              <label className={cn(segmentInnerClass, "cursor-text")}>
                <SegmentLabel icon={icon}>{label}</SegmentLabel>
                <input
                  type="text"
                  autoComplete="off"
                  role="combobox"
                  aria-expanded={showList}
                  aria-controls={listId}
                  aria-autocomplete="list"
                  value={isTyping ? query : value}
                  placeholder={placeholder}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    setQuery(null);
                    setFieldTouched(name, true);
                  }}
                  className="w-full truncate bg-transparent p-0 text-[15px] font-semibold leading-snug text-ink outline-none placeholder:font-medium placeholder:text-ink/60"
                />
                <SegmentFoot name={name} hint={selected?.airport} />
              </label>

              {showHint && (
                <p className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink/65 shadow-lift">
                  Type at least {MIN_QUERY_LENGTH} characters to search
                </p>
              )}

              {showList && (
                <ul
                  id={listId}
                  role="listbox"
                  className="absolute left-0 top-full z-50 mt-2 max-h-80 w-full min-w-[20rem] overflow-y-auto overscroll-contain rounded-2xl border border-line bg-white p-1.5 shadow-lift"
                >
                  {results.length === 0 && (
                    <li className="px-3 py-2 text-sm text-ink/65">
                      No airports found.
                    </li>
                  )}
                  {results.map((item, i) => (
                    <li
                      key={item.code}
                      role="option"
                      aria-selected={i === activeIndex}
                      // mousedown fires before the input's blur closes the list
                      onMouseDown={(e) => {
                        e.preventDefault();
                        choose(item);
                      }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                        i === activeIndex && "bg-sand",
                      )}
                    >
                      <span className="grid h-8 w-12 shrink-0 place-items-center rounded-lg bg-ink font-display text-xs font-bold tracking-wide text-gold">
                        {item.code}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block truncate text-ink",
                            field.value === item.code && "font-semibold",
                          )}
                        >
                          {item.city} · {item.airport}
                        </span>
                        <span className="block text-xs text-ink/60">
                          {item.country}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {children}
            </>
          );
        }}
      </Field>
    </Segment>
  );
};

/** Travellers and cabin in one picker. Travellers live on the first route. */
const TravellersCabinSegment = () => {
  const { values, setFieldValue } = useFormikContext();
  const cabin = FLIGHT_CATEGORIES.find((c) => c.value === values.category);

  return (
    <CounterSegment
      prefix="routes.0"
      label="Travellers & cabin"
      icon={UsersRound}
      rows={TRAVELLER_ROWS}
      value={(count) => {
        const total = count("adult") + count("child") + count("infant");
        return total > 0 ? `${total} traveller${total > 1 ? "s" : ""}` : "";
      }}
      hint={() => (cabin ? cabin.label : "Choose a cabin")}
      errorName={["routes.0.adult", "category"]}
    >
      <fieldset className="mt-2 border-t border-line pt-4">
        <legend className="mb-3 text-sm font-semibold text-ink">Cabin</legend>
        <div className="grid grid-cols-3 gap-1.5">
          {FLIGHT_CATEGORIES.map((option) => {
            const active = values.category === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={active}
                onClick={() => setFieldValue("category", option.value)}
                className={cn(
                  "rounded-full border px-2 py-2 text-xs font-semibold transition",
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-line text-ink hover:border-ink",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>
    </CounterSegment>
  );
};

const FormFields = ({ flightType }) => {
  const { values, setFieldValue } = useFormikContext();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const swapCities = (index) => {
    const { from, to } = values.routes[index];
    setFieldValue(`routes.${index}.from`, to);
    setFieldValue(`routes.${index}.to`, from);
  };

  const isMultiCity = flightType === "multicity";

  return (
    <FieldArray name="routes">
      {({ push, remove }) => (
        <div className="flex flex-col gap-4">
          {values.routes.map((route, index) => {
            const departValue = getIn(values, `routes.${index}.depart`);
            const departDate = departValue ? parseISO(departValue) : today;
            // A later leg can't leave before the previous one.
            const previousDepart =
              index > 0 && getIn(values, `routes.${index - 1}.depart`);
            const earliestDepart = previousDepart
              ? parseISO(previousDepart)
              : today;

            return (
              <div key={index} className="flex flex-col gap-2">
                {isMultiCity && (
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60">
                      Flight {index + 1}
                    </span>
                    {values.routes.length > 2 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-ink/65 transition hover:bg-red-50 hover:text-red-700"
                      >
                        <X className="size-3.5" aria-hidden="true" />
                        Remove
                      </button>
                    )}
                  </div>
                )}

                <Bar>
                  <CitySegment
                    name={`routes.${index}.from`}
                    label="From"
                    placeholder="Where from?"
                    icon={PlaneTakeoff}
                    className="lg:flex-[1.25]"
                  >
                    <button
                      type="button"
                      onClick={() => swapCities(index)}
                      aria-label="Swap departure and arrival"
                      className="absolute bottom-0 right-6 z-10 grid size-9 translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-soft transition hover:rotate-180 hover:bg-ink hover:text-gold lg:bottom-auto lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2"
                    >
                      <ArrowLeftRight className="size-4 rotate-90 lg:rotate-0" />
                    </button>
                  </CitySegment>

                  <CitySegment
                    name={`routes.${index}.to`}
                    label="To"
                    placeholder="Where to?"
                    icon={PlaneLanding}
                    className="lg:flex-[1.25] lg:[&>label]:pl-7"
                  />

                  <DateSegment
                    name={`routes.${index}.depart`}
                    label="Depart"
                    icon={CalendarDays}
                    isDisabled={(date) => date < earliestDepart}
                    defaultMonth={earliestDepart}
                  />

                  {flightType === "return" && (
                    <DateSegment
                      name={`routes.${index}.return`}
                      label="Return"
                      icon={CalendarDays}
                      hint={route.depart ? undefined : "Pick departure first"}
                      isDisabled={(date) => date < departDate}
                      defaultMonth={addDays(departDate, 7)}
                    />
                  )}

                  {!isMultiCity && <TravellersCabinSegment />}
                </Bar>
              </div>
            );
          })}

          {isMultiCity && (
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <button
                type="button"
                onClick={() => push({ ...EMPTY_ROUTE })}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-ink/25 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-gold hover:bg-sand"
              >
                <Plus className="size-4" aria-hidden="true" />
                Add another flight
              </button>
              <Bar className="lg:w-80">
                <TravellersCabinSegment />
              </Bar>
            </div>
          )}
        </div>
      )}
    </FieldArray>
  );
};

export default FormFields;
