"use client";

import { useState } from "react";
import { Field, getIn, useFormikContext } from "formik";
import { format, parseISO } from "date-fns";
import { CalendarDays, Minus, Phone, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import ArrowButton from "@/components/ui/ArrowButton";
import FormStatus from "@/components/common/FormStatus";
import { phoneHref } from "@/components/common/PhoneNumberViewer";
import { data } from "@/lib/contactInfo";
import { cn } from "@/lib/utils";

/*
 * Building blocks shared by the Flights, Hotels and Umrah search forms.
 *
 * Fields sit side by side in one rounded "bar" (stacked on phones), split by
 * thin dividers, the way airline and hotel search boxes look. Each segment
 * shows a small label, the value in bold and an optional hint line; a
 * validation error replaces the hint. The whole segment is the click target
 * (a <label> for inputs, the trigger button for pickers).
 */

/** Rounded white bar that holds a row of segments. */
export const Bar = ({ className, children }) => (
  <div
    className={cn(
      "flex flex-col rounded-[28px] border border-line bg-white p-1.5 shadow-soft lg:flex-row",
      className
    )}
  >
    {children}
  </div>
);

/** One cell of a Bar; draws the divider after itself. */
export const Segment = ({ className, children }) => (
  <div
    className={cn(
      "relative min-w-0 flex-1 border-b border-line last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0",
      className
    )}
  >
    {children}
  </div>
);

/** Class for the interactive element filling a Segment. */
export const segmentInnerClass =
  "flex h-full min-h-[78px] w-full min-w-0 flex-col justify-center gap-1 rounded-[22px] px-5 py-3 text-left outline-none transition hover:bg-sand/70 focus-within:bg-sand focus-visible:bg-sand focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/60 data-[state=open]:bg-sand";

export const SegmentLabel = ({ icon: Icon, children }) => (
  <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/60">
    {Icon && <Icon aria-hidden="true" className="size-3.5 text-gold-deep" />}
    {children}
  </span>
);

const valueClass = "truncate text-[15px] font-semibold leading-snug text-ink";
const placeholderClass = "truncate text-[15px] font-medium leading-snug text-ink/60";

/** Error for `name` once touched, otherwise the hint line (if any). */
export const SegmentFoot = ({ name, hint }) => {
  const { errors, touched } = useFormikContext();
  const names = [].concat(name ?? []);
  const error = names
    .map((n) => getIn(touched, n) && getIn(errors, n))
    .find((e) => typeof e === "string");

  if (error) {
    return (
      <span role="alert" className="min-h-4 truncate text-[11px] font-medium leading-4 text-red-600">
        {error}
      </span>
    );
  }
  // Always render the line so every segment in a bar lines up.
  return (
    <span className="truncate text-xs leading-4 text-ink/60">
      {hint || " "}
    </span>
  );
};

/** Label + value (or placeholder) + foot, used inside picker buttons. */
export const SegmentBody = ({ icon, label, value, placeholder, hint, errorName }) => (
  <>
    <SegmentLabel icon={icon}>{label}</SegmentLabel>
    <span className={value ? valueClass : placeholderClass}>{value || placeholder}</span>
    <SegmentFoot name={errorName} hint={hint} />
  </>
);

/** Plain text input segment. */
export const TextSegment = ({
  name,
  label,
  icon,
  type = "text",
  placeholder,
  autoComplete,
}) => (
  <Segment>
    <label className={cn(segmentInnerClass, "cursor-text")}>
      <SegmentLabel icon={icon}>{label}</SegmentLabel>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full truncate bg-transparent p-0 text-[15px] font-semibold leading-snug text-ink outline-none placeholder:font-medium placeholder:text-ink/60"
      />
      <SegmentFoot name={name} />
    </label>
  </Segment>
);

export const popoverPanelClass = "rounded-card border-line bg-white shadow-lift";

/** Date picker segment. Stores yyyy-MM-dd strings, like the rest of the forms. */
export const DateSegment = ({
  name,
  label,
  placeholder = "Add date",
  icon = CalendarDays,
  hint,
  isDisabled,
  defaultMonth,
}) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const [open, setOpen] = useState(false);
  const value = getIn(values, name);
  const date = value ? parseISO(value) : undefined;

  return (
    <Segment>
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setFieldTouched(name, true);
        }}
      >
        <PopoverTrigger asChild>
          <button type="button" className={segmentInnerClass}>
            <SegmentBody
              icon={icon}
              label={label}
              value={date ? format(date, "EEE, d MMM") : ""}
              placeholder={placeholder}
              hint={date ? format(date, "yyyy") : hint}
              errorName={name}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="start"
          sideOffset={10}
          className={cn(popoverPanelClass, "w-auto p-2")}
        >
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date ?? defaultMonth}
            onSelect={(selected) => {
              setFieldValue(name, selected ? format(selected, "yyyy-MM-dd") : "");
              if (selected) setOpen(false);
            }}
            disabled={isDisabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </Segment>
  );
};

/** One "Adults  − 2 +" row inside a travellers popover. */
export const CounterRow = ({ label, hint, value, min = 0, onChange }) => (
  <div className="flex items-center justify-between gap-4 py-3">
    <div>
      <p className="text-sm font-semibold text-ink">{label}</p>
      {hint && <p className="text-xs text-ink/60">{hint}</p>}
    </div>
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={`Fewer ${label.toLowerCase()}`}
        className="grid size-9 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-ink disabled:pointer-events-none disabled:opacity-40"
      >
        <Minus className="size-4" />
      </button>
      <span
        aria-live="polite"
        className="w-5 text-center font-display text-base font-bold text-ink"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label={`More ${label.toLowerCase()}`}
        className="grid size-9 place-items-center rounded-full bg-ink text-white transition hover:bg-ink-soft"
      >
        <Plus className="size-4" />
      </button>
    </div>
  </div>
);

/**
 * Segment that opens a popover of CounterRows (plus optional extra content,
 * e.g. a cabin choice). `rows`: [{ key, label, hint, min }] where key is the
 * field name under `prefix`.
 */
export const CounterSegment = ({
  prefix,
  label,
  icon,
  rows,
  value,
  hint,
  errorName,
  onClose,
  children,
}) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const [open, setOpen] = useState(false);
  const count = (key) =>
    Number.parseInt(getIn(values, `${prefix}.${key}`) || 0, 10);

  const close = () => {
    setOpen(false);
    [].concat(errorName ?? []).forEach((n) => setFieldTouched(n, true));
    onClose?.();
  };

  return (
    <Segment>
      <Popover open={open} onOpenChange={(next) => (next ? setOpen(true) : close())}>
        <PopoverTrigger asChild>
          <button type="button" className={segmentInnerClass}>
            <SegmentBody
              icon={icon}
              label={label}
              value={value(count)}
              placeholder="Add guests"
              hint={hint?.(count)}
              errorName={errorName}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="end"
          sideOffset={10}
          className={cn(popoverPanelClass, "w-80 p-5")}
        >
          <div className="divide-y divide-line">
            {rows.map((row) => (
              <CounterRow
                key={row.key}
                label={row.label}
                hint={row.hint}
                min={row.min ?? 0}
                value={count(row.key)}
                onChange={(next) =>
                  setFieldValue(
                    `${prefix}.${row.key}`,
                    String(Math.max(row.min ?? 0, next))
                  )
                }
              />
            ))}
          </div>
          {children}
          <button
            type="button"
            onClick={close}
            className="mt-4 h-11 w-full rounded-full bg-ink text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-ink-soft"
          >
            Done
          </button>
        </PopoverContent>
      </Popover>
    </Segment>
  );
};

/** Small divider heading between groups of fields. */
export const GroupLabel = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60">
      {children}
    </span>
    <span aria-hidden="true" className="h-px flex-1 bg-line" />
  </div>
);

/**
 * "Your details" bar with the submit button beside it, a call line under it
 * and the send status. `fields`: props for TextSegment.
 */
export const DetailsRow = ({ fields, submitLabel, isSubmitting, status, error }) => (
  <div className="flex flex-col gap-4">
    <GroupLabel>Your details</GroupLabel>
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Bar className="flex-1 bg-sand/40 shadow-none">
        {fields.map((field) => (
          <TextSegment key={field.name} {...field} />
        ))}
      </Bar>
      <ArrowButton type="submit" disabled={isSubmitting} className="shrink-0 self-start lg:self-center">
        {isSubmitting ? "Sending…" : submitLabel}
      </ArrowButton>
    </div>
    <a
      href={phoneHref}
      className="group inline-flex w-fit items-center gap-2.5 text-sm text-ink/65 transition hover:text-ink"
    >
      <span className="grid size-8 place-items-center rounded-full border border-line text-gold-deep transition group-hover:border-ink group-hover:bg-ink group-hover:text-gold">
        <Phone className="size-3.5" aria-hidden="true" />
      </span>
      <span>
        Prefer to talk? Call{" "}
        <span className="font-semibold text-ink">{data.PhoneNumber}</span>
      </span>
    </a>
    <FormStatus status={status} error={error} />
  </div>
);
