"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/** Fire this before a programmatic router.push() so the line shows too. */
export const NAVIGATION_START_EVENT = "travellia:navigation-start";
export const signalNavigationStart = () =>
  window.dispatchEvent(new Event(NAVIGATION_START_EVENT));

// Fast page changes finish before this and never show the line.
const SHOW_AFTER_MS = 150;
// Give up quietly if a navigation never lands (e.g. it was cancelled).
const GIVE_UP_MS = 12000;

/**
 * 2px gold line along the bottom of the navbar while the next page loads.
 * Starts on clicks on links to another page (and on NAVIGATION_START_EVENT),
 * creeps towards 85%, then completes and fades once the pathname changes.
 * Same-page links (#plan-your-trip etc.) never start it.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const timers = useRef({});

  const clearTimers = () => {
    clearTimeout(timers.current.show);
    clearTimeout(timers.current.giveUp);
    clearTimeout(timers.current.hide);
    clearInterval(timers.current.crawl);
  };

  const hide = () => {
    clearTimers();
    visibleRef.current = false;
    setVisible(false);
    timers.current.hide = setTimeout(() => setProgress(0), 320);
  };

  useEffect(() => {
    const start = () => {
      clearTimers();
      timers.current.show = setTimeout(() => {
        visibleRef.current = true;
        setVisible(true);
        setProgress(0.08);
        timers.current.crawl = setInterval(
          () => setProgress((p) => p + (0.85 - p) * 0.12),
          240
        );
      }, SHOW_AFTER_MS);
      timers.current.giveUp = setTimeout(hide, GIVE_UP_MS);
    };

    // Capture phase: runs before Next's <Link> handles the click.
    const onClick = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = event.target.closest?.("a[href]");
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }
      start();
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener(NAVIGATION_START_EVENT, start);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(NAVIGATION_START_EVENT, start);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The new page has arrived: finish the line, then fade it out.
  useEffect(() => {
    clearTimers();
    if (!visibleRef.current) return;
    setProgress(1);
    timers.current.hide = setTimeout(hide, 260);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] overflow-hidden rounded-full"
    >
      <span
        className="block h-full origin-left rounded-full bg-gold"
        style={{
          transform: `scaleX(${progress})`,
          opacity: visible ? 1 : 0,
          transition:
            "transform 260ms var(--motion-arrive), opacity 300ms ease",
        }}
      />
    </span>
  );
}
