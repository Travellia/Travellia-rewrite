"use client";

import { getIn, useFormikContext } from "formik";
import { addDays, differenceInCalendarDays, parseISO } from "date-fns";
import { BedDouble, CalendarCheck, CalendarX, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { CITY_LIST } from "@/components/common/cities";
import { cn } from "@/lib/utils";
import {
  Bar,
  CounterSegment,
  DateSegment,
  Segment,
  SegmentBody,
  segmentInnerClass,
} from "../fields";

const GUEST_ROWS = [
  { key: "room", label: "Rooms", min: 1 },
  { key: "adult", label: "Adults", hint: "12+ years", min: 1 },
  { key: "child", label: "Children", hint: "2–11 years" },
  { key: "infant", label: "Infants", hint: "Under 2 years" },
];

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

/** City dropdown for the first segment. */
const DestinationSegment = ({ name }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const value = getIn(values, name);
  const city = CITY_LIST.find((item) => item.code === value)?.city;

  return (
    <Segment className="lg:flex-[1.3]">
      <Select
        value={value}
        onValueChange={(next) => setFieldValue(name, next)}
        onOpenChange={(open) => {
          if (!open) setFieldTouched(name, true);
        }}
      >
        <SelectTrigger
          className={cn(
            segmentInnerClass,
            "!h-auto items-start whitespace-normal border-0 shadow-none focus-visible:ring-2 focus-visible:ring-gold/60 [&>svg:last-child]:hidden"
          )}
        >
          <SegmentBody
            icon={MapPin}
            label="Where to"
            value={city}
            placeholder="Choose a city"
            errorName={name}
          />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" sideOffset={10} className="max-h-80">
          {CITY_LIST.map((item) => (
            <SelectItem key={item.code} value={item.code}>
              {item.city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Segment>
  );
};

const HotelFormFields = () => {
  const { values } = useFormikContext();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkInValue = getIn(values, "routes.0.depart");
  const checkOutValue = getIn(values, "routes.0.return");
  const checkIn = checkInValue ? parseISO(checkInValue) : undefined;
  // Check-out is at least the night after check-in.
  const earliestCheckOut = addDays(checkIn ?? today, 1);
  const nights =
    checkIn && checkOutValue
      ? differenceInCalendarDays(parseISO(checkOutValue), checkIn)
      : 0;

  return (
    <Bar>
      <DestinationSegment name="routes.0.from" />
      <DateSegment
        name="routes.0.depart"
        label="Check in"
        icon={CalendarCheck}
        isDisabled={(date) => date < today}
      />
      <DateSegment
        name="routes.0.return"
        label="Check out"
        icon={CalendarX}
        hint={checkIn ? undefined : "Pick check-in first"}
        isDisabled={(date) => date < earliestCheckOut}
        defaultMonth={earliestCheckOut}
      />
      {nights > 0 && (
        <span className="sr-only" aria-live="polite">
          {plural(nights, "night")}
        </span>
      )}
      <CounterSegment
        prefix="routes.0"
        label="Rooms & guests"
        icon={BedDouble}
        rows={GUEST_ROWS}
        value={(count) => {
          const guests = count("adult") + count("child") + count("infant");
          return guests > 0 ? plural(guests, "guest") : "";
        }}
        hint={(count) =>
          [plural(count("room") || 1, "room"), nights > 0 && plural(nights, "night")]
            .filter(Boolean)
            .join(" · ")
        }
        errorName="routes.0.adult"
      />
    </Bar>
  );
};

export default HotelFormFields;
