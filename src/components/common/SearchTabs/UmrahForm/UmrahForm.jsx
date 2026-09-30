import { Bus, Headset, Hotel, Plane, Stamp } from "lucide-react";
import UmrahContactForm from "./UmrahContactForm";

const services = [
  { title: "Visa", icon: Stamp },
  { title: "Flights", icon: Plane },
  { title: "Transport", icon: Bus },
  { title: "Hotels", icon: Hotel },
  { title: "24/7 support", icon: Headset },
];

const UmrahForm = () => {
  return (
    <div className="flex flex-col gap-7">
      {/* Package Summary */}
      <div className="flex flex-col gap-5 rounded-[28px] bg-ink p-5 text-white sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Every package includes
          </p>
          <p className="font-display text-xl font-bold uppercase tracking-tight">
            Your Umrah,{" "}
            <em className="font-serif font-normal normal-case tracking-normal text-gold">
              fully arranged
            </em>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end">
          {services.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm font-semibold"
            >
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center rounded-full bg-gold text-ink"
              >
                <Icon className="size-4" />
              </span>
              {title}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <UmrahContactForm />
    </div>
  );
};

export default UmrahForm;
