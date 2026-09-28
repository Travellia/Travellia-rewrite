"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FlightsForm from "./FlightsForm/FlightsForm";
import { BedDouble, Moon, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import HotelsForm from "./HotelsForm/HotelsForm";
import UmrahForm from "./UmrahForm/UmrahForm";
// import HolidaysForm from "./tabs/HolidaysForm";
// import UmrahForm from "./tabs/UmrahForm";

const TABS = [
  { key: "flights", label: "Flights", path: "/flights", icon: Plane, component: <FlightsForm /> },
  { key: "hotels", label: "Hotels", path: "/hotels", icon: BedDouble, component: <HotelsForm /> },
  // { key: "holidays", label: "Holidays", path: "/holidayPackages", component: <HolidaysForm /> },
  { key: "umrah", label: "Umrah", path: "/hajj-umrah", icon: Moon, component: <UmrahForm /> },
];

const SearchTabs = ({ defaultTab = "flights" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab.key);
    router.push(tab.path);
  };

  return (
    <section className="flex flex-col gap-6">
      {/* Tabs Header */}
      <div
        role="tablist"
        aria-label="Search type"
        className="inline-flex w-fit gap-1 rounded-full bg-sand p-1"
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.key}
            label={tab.label}
            icon={tab.icon}
            active={activeTab === tab.key}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>

      {/* Active Form */}
      <div>{TABS.find((tab) => tab.key === activeTab)?.component}</div>
    </section>
  );
};

const Tab = ({ label, icon: Icon, active, onClick }) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-5",
      active
        ? "bg-ink text-white shadow-soft"
        : "text-ink/60 hover:bg-white hover:text-ink"
    )}
  >
    <Icon className={cn("size-4", active && "text-gold")} aria-hidden="true" />
    {label}
  </button>
);

export default SearchTabs;
