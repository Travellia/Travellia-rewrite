// RoutesFields.jsx
import { FieldArray, Field, useFormikContext, ErrorMessage } from "formik";
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
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { CITY_LIST } from "@/components/common/cities";

const cityList = CITY_LIST;

const FormFields = ({ flightType }) => {
  const { values, setFieldValue } = useFormikContext();

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
              <div className="flex gap-5">
                <div
                  key={index}
                  className="flex flex-col gap-4 md:grid md:grid-col-3 md:grid-rows-2 xl:flex xl:flex-row  xl:gap-4 xl:items-center relative w-full"
                >
                  {/* Leaving From */}
                  <div className="relative md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:w-full xl:w-[10vw]">
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

                  {/* Going To */}
                  <div className="relative  md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:w-full xl:w-[10vw]">
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

                  {/* Adults */}
                  <div className="relative md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:w-full xl:w-[7vw]">
                    <Image
                      src="/holidayPackage/ContactUs/map-icon.png"
                      alt="Adults"
                      width={20}
                      height={20}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    />

                    <Field name={`routes.${index}.adult`}>
                      {({ field, form }) => (
                        <Select
                          value={field.value}
                          onValueChange={(value) =>
                            form.setFieldValue(`routes.${index}.adult`, value)
                          }
                        >
                          <SelectTrigger className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base">
                            <SelectValue placeholder="Adults" />
                          </SelectTrigger>

                          <SelectContent
                            position="popper"
                            side="bottom"
                            align="center"
                            sideOffset={10}
                          >
                            {[...Array(6)].map((_, i) => (
                              <SelectItem
                                key={i + 1}
                                value={(i + 1).toString()}
                              >
                                {i + 1} Adults
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </Field>
                  </div>

                  {/* Children */}
                  <div className="relative md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:w-full xl:w-[8vw]">
                    <Image
                      src="/holidayPackage/ContactUs/map-icon.png"
                      alt="Children"
                      width={20}
                      height={20}
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    />

                    <Field name={`routes.${index}.child`}>
                      {({ field, form }) => (
                        <Select
                          value={field.value}
                          onValueChange={(value) =>
                            form.setFieldValue(`routes.${index}.child`, value)
                          }
                        >
                          <SelectTrigger className="h-11 bg-gray-100 rounded-xl pl-10 py-8 border-0 focus:ring-1 focus:ring-primary w-full text-base">
                            <SelectValue placeholder="Children" />
                          </SelectTrigger>

                          <SelectContent
                            position="popper"
                            side="bottom"
                            align="center"
                            sideOffset={10}
                          >
                            {[...Array(5)].map((_, i) => (
                              <SelectItem key={i} value={i.toString()}>
                                {i} Children
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </Field>
                  </div>

                  {/* Depart Date */}
                  <div className="relative md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:w-full xl:w-[7vw]">
                    <Image
                      src="/holidayPackage/ContactUs/map-icon.png"
                      alt="From"
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
                            format(departDate, "dd/MM/yyyy") // or "PPP" for "Jan 12th, 2026"
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
                              selected ? format(selected, "yyyy-MM-dd") : ""
                            );
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Return Date – only if not oneway */}
                  {flightType !== "oneway" && (
                    <div className="relative md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:w-full xl:w-[7vw]">
                      <Image
                        src="/holidayPackage/ContactUs/map-icon.png"
                        alt="From"
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
                                selected ? format(selected, "yyyy-MM-dd") : ""
                              );
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}

                  {/* Remove button */}
                </div>
                {flightType === "multicity" && values.routes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className=" flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xl font-bold hover:bg-red-600 transition md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 self-center "
                    aria-label="Remove route"
                  >
                    ×
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
                })
              }
              className="text-primary hover:text-primary/80 font-medium text-sm mt-4 block"
            >
              + Add another route
            </button>
          )}
        </div>
      )}
    </FieldArray>
  );
};

export default FormFields;
