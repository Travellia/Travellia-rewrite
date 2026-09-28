"use client";

import { useEffect } from "react";

/**
 * Clicking a link to the hash that is already in the URL (e.g. a second
 * "Book Now" → #plan-your-trip) is a no-op for both the browser and Next's
 * <Link>. Intercept same-page hash links and always scroll to the target.
 */
const HashLinkScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest?.('a[href^="#"]');
      const id = link?.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }
    };

    // Capture phase, so this runs before Next's <Link> click handler.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
};

export default HashLinkScroll;
