// RoutesFields.jsx
import { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { CITY_LIST } from "@/components/common/cities";
import { Plus, Minus } from "lucide-react";

const cityList = CITY_LIST;

const FieldError = ({ name }) => (
  <ErrorMessage
    name={name}
    component="p"
    className="text-red-500 text-xs pl-1 pt-1"
  />
);

const TravellersPopover = ({ index, route, setFieldValue, setFieldTouched }) => {
  const adults = route.adult ? Number.parseInt(route.adult) : 0;
  const children = route.child ? Number.parseInt(route.child) : 0;
  const infants = route.infant ? Number.parseInt(route.infant) : 0;
  const totalTravellers = adults + children + infants;

  const [travellersOpen, setTravellersOpen] = useState(false);

  const updateTravellers = (type, value) => {
    const newValue = Math.max(0, value);
    setFieldValue(`routes.${index}.${type}`, newValue.toString());
  };

  return (
    <div className="relative w-full">
      <Popover
        open={travellersOpen}
        onOpenChange={(open) => {
          setTravellersOpen(open);
          if (!open) setFieldTouched(`routes.${index}.adult`, true);
        }}
      >
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full justify-start text-left font-normal bg-gray-100 rounded-xl pl-10 py-8 pr-4 border-0 focus:ring-1 focus:ring-primary"
          >
            <Image
              src="/holidayPackage/ContactUs/map-icon.png"
              alt="Travellers"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
            />
            <span className={cn(!totalTravellers && "text-muted-foreground")}>
              {totalTravellers > 0
                ? `${totalTravellers} Traveller${
                    totalTravellers > 1 ? "s" : ""
                  }`
                : "Travellers"}
            </span>
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="center"
          sideOffset={10}
          className="w-80 p-4"
        >
          <div className="space-y-4">
            {/* Adults */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">Adults</p>
                <p className="text-xs text-muted-foreground">12+ years</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => updateTravellers("adult", adults - 1)}
                  disabled={adults <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={adults}
                  className="h-8 w-14 text-center"
                  readOnly
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => updateTravellers("adult", adults + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">Children</p>
                <p className="text-xs text-muted-foreground">2–11 years</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => updateTravellers("child", children - 1)}
                  disabled={children <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={children}
                  className="h-8 w-14 text-center"
                  readOnly
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => updateTravellers("child", children + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">Infants</p>
                <p className="text-xs text-muted-foreground">Under 2 years</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => updateTravellers("infant", infants - 1)}
                  disabled={infants <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={infants}
                  className="h-8 w-14 text-center"
                  readOnly
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => updateTravellers("infant", infants + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              type="button"
              className="w-full"
              onClick={() => {
                setTravellersOpen(false);
                setFieldTouched(`routes.${index}.adult`, true);
              }}
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Hidden fields */}
      <Field name={`routes.${index}.adult`} type="hidden" />
      <Field name={`routes.${index}.child`} type="hidden" />
      <Field name={`routes.${index}.infant`} type="hidden" />
      <FieldError name={`routes.${index}.adult`} />
    </div>
  );
};

const FormFields = ({ flightType }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <FieldArray name="routes">
      {({ push, remove }) => (
        <div className="space-y-6">
          {values.routes.map((route, index) => {
            const departDate = route.depart
              ? parseISO(route.depart)
              : undefined;
            const returnDate = route.return
              ? parseISO(route.return)
              : undefined;

            return (
              <div className="flex gap-5" key={index}>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 xl:items-start relative w-full">
                  {/* Leaving From */}
                  <div className="w-full">
                    <div className="relative">
                      <Image
                        src="/holidayPackage/ContactUs/map-icon.png"
                        alt="From"
                        width={20}
                        height={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                      />
                      <Field name={`routes.${index}.from`}>
                        {({ field, form }) => (
                          <Select
                            value={field.value}
                            onValueChange={(value) =>
                              form.setFieldValue(
                                `routes.${index}.from`,
                                value,
                              )
                            }
                          >
                            <SelectTrigger className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base">
                              <SelectValue placeholder="Leaving From" />
                            </SelectTrigger>
                            <SelectContent
                              position="popper"
                              side="bottom"
                              align="center"
                              sideOffset={10}
                              alignOffset={0}
                            >
                              {cityList.map((item) => (
                                <SelectItem key={item.code} value={item.code}>
                                  {item.city} ({item.code})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </Field>
                    </div>
                    <FieldError name={`routes.${index}.from`} />
                  </div>

                  {/* Going To */}
                  <div className="w-full">
                    <div className="relative">
                      <Image
                        src="/holidayPackage/ContactUs/map-icon.png"
                        alt="To"
                        width={20}
                        height={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                      />
                      <Field name={`routes.${index}.to`}>
                        {({ field, form }) => (
                          <Select
                            value={field.value}
                            onValueChange={(value) =>
                              form.setFieldValue(`routes.${index}.to`, value)
                            }
                          >
                            <SelectTrigger className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base">
                              <SelectValue placeholder="Going To" />
                            </SelectTrigger>
                            <SelectContent
                              position="popper"
                              side="bottom"
                              align="center"
                              sideOffset={10}
                              alignOffset={0}
                            >
                              {cityList.map((item) => (
                                <SelectItem key={item.code} value={item.code}>
                                  {item.city} ({item.code})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </Field>
                    </div>
                    <FieldError name={`routes.${index}.to`} />
                  </div>

                  {/* Travellers */}
                  <div className="w-full">
                    <TravellersPopover
                      index={index}
                      route={route}
                      setFieldValue={setFieldValue}
                      setFieldTouched={setFieldTouched}
                    />
                  </div>

                  {/* Depart Date */}
                  <div className="w-full">
                    <div className="relative">
                      <Image
                        src="/holidayPackage/ContactUs/map-icon.png"
                        alt="Depart"
                        width={20}
                        height={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                      />
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            type="button"
                            variant="outline"
                            className={cn(
                              "h-11 w-full justify-start text-left font-normal bg-gray-100 rounded-xl pl-10 py-8 pr-4 border-0 focus:ring-1 focus:ring-primary",
                              !route.depart && "text-muted-foreground",
                            )}
                          >
                            {route.depart ? (
                              format(departDate, "dd/MM/yyyy")
                            ) : (
                              <span className="text-muted-foreground">
                                Depart date
                              </span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          side="bottom"
                          align="center"
                          sideOffset={10}
                          alignOffset={0}
                          className="w-auto p-0"
                        >
                          <Calendar
                            mode="single"
                            selected={departDate}
                            onSelect={(selected) => {
                              setFieldValue(
                                `routes.${index}.depart`,
                                selected ? format(selected, "yyyy-MM-dd") : "",
                              );
                            }}
                            disabled={(date) => date < today}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <FieldError name={`routes.${index}.depart`} />
                  </div>

                  {/* Return Date – only if not oneway */}
                  {flightType !== "oneway" && (
                    <div className="w-full">
                      <div className="relative">
                        <Image
                          src="/holidayPackage/ContactUs/map-icon.png"
                          alt="Return"
                          width={20}
                          height={20}
                          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                        />
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className={cn(
                                "h-11 w-full justify-start text-left font-normal bg-gray-100 rounded-xl pl-10 py-8 pr-4 border-0 focus:ring-1 focus:ring-primary",
                                !route.return && "text-muted-foreground",
                              )}
                            >
                              {route.return ? (
                                format(returnDate, "dd/MM/yyyy")
                              ) : (
                                <span className="text-muted-foreground">
                                  Return date
                                </span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            side="bottom"
                            align="center"
                            sideOffset={10}
                            alignOffset={0}
                            className="w-auto p-0"
                          >
                            <Calendar
                              mode="single"
                              selected={returnDate}
                              onSelect={(selected) => {
                                setFieldValue(
                                  `routes.${index}.return`,
                                  selected
                                    ? format(selected, "yyyy-MM-dd")
                                    : "",
                                );
                              }}
                              disabled={(date) => date < today}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <FieldError name={`routes.${index}.return`} />
                    </div>
                  )}
                </div>

                {flightType === "multicity" && values.routes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xl font-bold leading-none hover:bg-red-600 transition self-start mt-1"
                    aria-label="Remove route"
                  >
                    <span className="-translate-y-px">×</span>
                  </button>
                )}
              </div>
            );
          })}

          {flightType === "multicity" && (
            <button
              type="button"
              onClick={() =>
                push({
                  from: "",
                  to: "",
                  depart: "",
                  return: "",
                  adult: "0",
                  child: "0",
                  infant: "0",
                })
              }
              className="text-primary hover:text-primary/80 font-medium text-sm mt-4 block"
            >
              + Add another route
            </button>
          )}

          {/* Traveller Contact Details - once per form */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pt-2">
            <div className="w-full">
              <div className="relative">
                <Image
                  src="/holidayPackage/ContactUs/map-icon.png"
                  alt="Name"
                  width={20}
                  height={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                />
                <Field name="name">
                  {({ field }) => (
                    <Input
                      {...field}
                      placeholder="Name"
                      className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base"
                    />
                  )}
                </Field>
              </div>
              <FieldError name="name" />
            </div>

            <div className="w-full">
              <div className="relative">
                <Image
                  src="/holidayPackage/ContactUs/map-icon.png"
                  alt="Number"
                  width={20}
                  height={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                />
                <Field name="contact">
                  {({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      placeholder="Number"
                      className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base"
                    />
                  )}
                </Field>
              </div>
              <FieldError name="contact" />
            </div>

            <div className="w-full">
              <div className="relative">
                <Image
                  src="/holidayPackage/ContactUs/map-icon.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                />
                <Field name="email">
                  {({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base"
                    />
                  )}
                </Field>
              </div>
              <FieldError name="email" />
            </div>
          </div>
        </div>
      )}
    </FieldArray>
  );
};

export default FormFields;
