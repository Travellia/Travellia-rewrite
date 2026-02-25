"use client";

// RoutesFields.jsx
import { FieldArray, Field, useFormikContext } from "formik";
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
import { useState } from "react";

const cityList = CITY_LIST;

const TravellersPopover = ({ index, route, setFieldValue }) => {
  const adults = route.adult ? Number.parseInt(route.adult) : 1;
  const children = route.child ? Number.parseInt(route.child) : 0;
  const infants = route.infant ? Number.parseInt(route.infant) : 0;
  const totalTravellers = adults + children + infants;

  const [travellersOpen, setTravellersOpen] = useState(false);

  const updateTravellers = (type, value) => {
    const newValue = Math.max(0, value);
    if (type === "adult" && newValue < 1) return;
    setFieldValue(`routes.${index}.${type}`, newValue.toString());
  };

  return (
    <div className="relative flex-1">
      {/* LEFT ICON (same as other fields) */}
      <Image
        src="/holidayPackage/ContactUs/map-icon.png"
        alt="Travellers"
        width={20}
        height={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
      />

      <Popover open={travellersOpen} onOpenChange={setTravellersOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-11 w-full justify-start text-left font-normal bg-gray-100 rounded-xl pl-10 py-8 pr-4 border-0 focus:ring-1 focus:ring-primary"
          >
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
                  disabled={adults <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={adults}
                  className="h-8 w-14 text-center"
                  min="1"
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
              onClick={() => setTravellersOpen(false)}
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
    </div>
  );
};

const HotelFormFields = () => {
  const { values, setFieldValue } = useFormikContext();

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
              <div key={index} className="space-y-4">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:items-center relative w-full">
                    {/* Where To */}
                    <div className="relative flex-1">
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
                              form.setFieldValue(`routes.${index}.from`, value)
                            }
                          >
                            <SelectTrigger className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base">
                              <SelectValue placeholder="Where To" />
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

                    {/* Check In */}
                    <div className="relative flex-1">
                      <Image
                        src="/holidayPackage/ContactUs/map-icon.png"
                        alt="Check In"
                        width={20}
                        height={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                      />
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-11 w-full justify-start text-left font-normal bg-gray-100 rounded-xl pl-10 py-8 pr-4 border-0 focus:ring-1 focus:ring-primary",
                              !route.depart && "text-muted-foreground"
                            )}
                          >
                            {route.depart ? (
                              format(departDate, "dd/MM/yyyy")
                            ) : (
                              <span className="text-muted-foreground">
                                Check In
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
                                selected ? format(selected, "yyyy-MM-dd") : ""
                              );
                            }}
                            disabled={(date) => date < today}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Check Out */}

                    <div className="relative flex-1">
                      <Image
                        src="/holidayPackage/ContactUs/map-icon.png"
                        alt="Check Out"
                        width={20}
                        height={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                      />
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-11 w-full justify-start text-left font-normal bg-gray-100 rounded-xl pl-10 py-8 pr-4 border-0 focus:ring-1 focus:ring-primary",
                              !route.return && "text-muted-foreground"
                            )}
                          >
                            {route.return ? (
                              format(returnDate, "dd/MM/yyyy")
                            ) : (
                              <span className="text-muted-foreground">
                                Check Out
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
                                selected ? format(selected, "yyyy-MM-dd") : ""
                              );
                            }}
                            disabled={(date) => date < today}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Travellers - Using separate component */}
                    <TravellersPopover
                      index={index}
                      route={route}
                      setFieldValue={setFieldValue}
                    />

                    {/* Going To */}
                    <div className="relative flex-1">
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
                  </div>
                </div>

                {/* Second Line - Name, Email, Contact Number */}
                <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:items-center">
                  <div className="relative flex-1">
                    <Image
                      src="/holidayPackage/ContactUs/map-icon.png"
                      alt="Check In"
                      width={20}
                      height={20}
                      className="absolute left-3 top-1/2 -translate-y-1/2  pointer-events-none z-10"
                    />
                    <Field name={`routes.${index}.name`}>
                      {({ field }) => (
                        <Input
                          {...field}
                          placeholder="Name"
                          className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base"
                        />
                      )}
                    </Field>
                  </div>

                  <div className="relative flex-1">
                    <Image
                      src="/holidayPackage/ContactUs/map-icon.png"
                      alt="Check In"
                      width={20}
                      height={20}
                      className="absolute left-3 top-1/2 -translate-y-1/2  pointer-events-none z-10"
                    />
                    <Field name={`routes.${index}.email`}>
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

                  <div className="relative flex-1">
                    <Image
                      src="/holidayPackage/ContactUs/map-icon.png"
                      alt="Check In"
                      width={20}
                      height={20}
                      className="absolute left-3 top-1/2 -translate-y-1/2  pointer-events-none z-10"
                    />
                    <Field name={`routes.${index}.contact`}>
                      {({ field }) => (
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Contact Number"
                          className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </FieldArray>
  );
};

export default HotelFormFields;
