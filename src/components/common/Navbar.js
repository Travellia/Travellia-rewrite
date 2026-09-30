"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import PhoneNumberViewer, { phoneHref } from "@/components/common/PhoneNumberViewer";
import NavigationProgress from "@/components/common/NavigationProgress";
import ArrowButton from "@/components/ui/ArrowButton";
import useGlidingPill from "@/hooks/useGlidingPill";
import { data } from "@/lib/contactInfo";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Flights", path: "/flights" },
  { name: "Hotels", path: "/hotels" },
  { name: "Umrah", path: "/hajj-umrah" },
  { name: "Holidays", path: "/holidayPackages" },
  { name: "Contact", path: "/contact" },
];

const isActive = (pathname, path) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

const isPlainClick = (event) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // The link just clicked, highlighted before its page has loaded.
  const [pendingPath, setPendingPath] = useState(null);
  const listRef = useRef(null);

  const activePath =
    pendingPath ?? navLinks.find((link) => isActive(pathname, link.path))?.path;
  const { pill, style: pillStyle } = useGlidingPill(listRef, activePath);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu and drop the optimistic highlight on arrival.
  useEffect(() => {
    setIsMenuOpen(false);
    setPendingPath(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 [view-transition-name:site-header]">
      <nav
        aria-label="Main"
        className={cn(
          "relative mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-full border border-line py-2 pl-5 pr-2 transition-all duration-300",
          scrolled
            ? "bg-white/85 shadow-lift backdrop-blur-xl"
            : "bg-white/70 shadow-soft backdrop-blur-md"
        )}
      >
        <Link href="/" className="shrink-0" aria-label="Travellia home">
          <Image
            src="/logo.webp"
            alt="Travellia"
            width={200}
            height={50}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        {/* Desktop links, with one pill that glides to the chosen link */}
        <ul
          ref={listRef}
          className="relative hidden items-center gap-1 rounded-full bg-sand/80 p-1 md:flex"
        >
          {pill && (
            <li
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1 left-0 top-1 rounded-full bg-ink shadow-soft"
              style={pillStyle}
            />
          )}
          {navLinks.map((link) => {
            const current = isActive(pathname, link.path);
            const highlighted = activePath === link.path;
            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.path}
                  data-pill-key={link.path}
                  aria-current={current ? "page" : undefined}
                  onClick={(event) => {
                    if (isPlainClick(event)) setPendingPath(link.path);
                  }}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 lg:px-5",
                    highlighted
                      ? cn("text-white", !pill && "bg-ink shadow-soft")
                      : "text-ink/70 hover:bg-white hover:text-ink"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <PhoneNumberViewer />
          <ArrowButton
            href="#plan-your-trip"
            tone="gold"
            size="sm"
            className="hidden xl:inline-flex"
          >
            Plan my trip
          </ArrowButton>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-ink text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <NavigationProgress />
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="menu-open fixed inset-x-3 top-[5.25rem] bottom-3 z-50 flex flex-col justify-between overflow-y-auto rounded-frame bg-ink p-6 text-white shadow-lift md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const active = isActive(pathname, link.path);
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-bold uppercase",
                      active ? "bg-white/10 text-gold" : "text-white"
                    )}
                  >
                    <span className="rise-mask">
                      <span className="rise" style={{ "--rise-index": index * 0.5 }}>
                        {link.name}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-gold">
                      ↗
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 pt-6">
            <ArrowButton
              href="#plan-your-trip"
              tone="gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Plan my trip
            </ArrowButton>
            <a href={phoneHref} className="text-sm text-white/70">
              Call us: <span className="text-white">{data.PhoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
