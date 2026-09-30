"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import FlightsForm from "./FlightsForm/FlightsForm";
import { BedDouble, Moon, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import HotelsForm from "./HotelsForm/HotelsForm";
import UmrahForm from "./UmrahForm/UmrahForm";
import { signalNavigationStart } from "@/components/common/NavigationProgress";
import useGlidingPill from "@/hooks/useGlidingPill";

const TABS = [
  { key: "flights", label: "Flights", path: "/flights", icon: Plane, component: <FlightsForm /> },
  { key: "hotels", label: "Hotels", path: "/hotels", icon: BedDouble, component: <HotelsForm /> },
  { key: "umrah", label: "Umrah", path: "/hajj-umrah", icon: Moon, component: <UmrahForm /> },
];

const SearchTabs = ({ defaultTab = "flights" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const router = useRouter();
  const pathname = usePathname();
  const listRef = useRef(null);
  const { pill, style: pillStyle } = useGlidingPill(listRef, activeTab);

  // Each tab opens its own page; fetch them ahead so switching is instant.
  useEffect(() => {
    TABS.forEach((tab) => router.prefetch(tab.path));
  }, [router]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.key);
    if (tab.path === pathname) return;
    signalNavigationStart();
    router.push(tab.path);
  };

  return (
    <section className="flex flex-col gap-6">
      {/* Tabs Header, with one pill that glides to the chosen tab */}
      <div
        ref={listRef}
        role="tablist"
        aria-label="Search type"
        className="relative flex w-full gap-1 rounded-full bg-sand p-1 sm:inline-flex sm:w-fit"
      >
        {pill && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1 left-0 top-1 rounded-full bg-ink shadow-soft"
            style={pillStyle}
          />
        )}
        {TABS.map((tab) => (
          <Tab
            key={tab.key}
            pillKey={tab.key}
            label={tab.label}
            icon={tab.icon}
            active={activeTab === tab.key}
            pillPlaced={Boolean(pill)}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>

      {/* Active Form */}
      <div>{TABS.find((tab) => tab.key === activeTab)?.component}</div>
    </section>
  );
};

const Tab = ({ pillKey, label, icon: Icon, active, pillPlaced, onClick }) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    data-pill-key={pillKey}
    onClick={onClick}
    className={cn(
      "relative flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-semibold transition-colors duration-300 sm:flex-none sm:px-5",
      active
        ? cn("text-white", !pillPlaced && "bg-ink shadow-soft")
        : "text-ink/60 hover:bg-white hover:text-ink"
    )}
  >
    <Icon
      className={cn("size-4 transition-colors duration-300", active && "text-gold")}
      aria-hidden="true"
    />
    {label}
  </button>
);

export default SearchTabs;
