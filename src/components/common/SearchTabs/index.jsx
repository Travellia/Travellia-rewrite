"use client";

import { useState } from "react";

import FlightsForm from "./FlightsForm/FlightsForm";
import Image from "next/image";
// import HotelsForm from "./tabs/HotelsForm";
// import HolidaysForm from "./tabs/HolidaysForm";
// import UmrahForm from "./tabs/UmrahForm";

const TABS = [
  { key: "flights", label: "Flights", component: <FlightsForm /> },
  // { key: "hotels", label: "Hotels", component: <HotelsForm /> },
  // { key: "holidays", label: "Holidays", component: <HolidaysForm /> },
  // { key: "umrah", label: "Umrah", component: <UmrahForm /> },
];

const SearchTabs = ({ defaultTab = "flights" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <section className="flex flex-col gap-5 px-5 -translate-y-10  ">
      {/* Tabs Header */}
      <div className="flex gap-3 z-1">
        {TABS.map((tab) => (
          <Tab
            key={tab.key}
            label={tab.label}
            active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          />
        ))}
      </div>

      {/* Active Form */}
      <div>{TABS.find((tab) => tab.key === activeTab)?.component}</div>
    </section>
  );
};

const Tab = ({ label, active, onClick }) => (
  <div
    className={`flex items-center justify-center p-3 gap-2 rounded-full text-sm font-semibold transition-all z-10
      ${
        active
          ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-md"
          : "bg-gray-100/80 text-gray-700 hover:bg-gray-200"
      }
        `}
  >
    <Image
      src="/holidayPackage/ContactUs/bag.png"
      alt="background"
      width={25}
      height={4}
      className="filter invert brightness-200 h-5.5 text-white"
    />
    <button variant="ghost" onClick={onClick}>
      {label}
    </button>
  </div>
);

export default SearchTabs;
