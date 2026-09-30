"use client";

import Link from "next/link";

/**
 * A link whose contents grow into a photo on the next page, e.g. a flight
 * card into the portrait in the detail hero (Welcome `portrait`).
 *
 * The view-transition name is only set on the clicked link, at click time:
 * view-transition names must be unique on a page, and a grid of cards would
 * otherwise all share it. Any older holder of the name (a card clicked
 * earlier, or this page's own portrait) is cleared first.
 */
const PhotoLink = ({ transitionName, onClick, children, ...props }) => (
  <Link
    {...props}
    onClick={(event) => {
      onClick?.(event);
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
      document.querySelectorAll("[data-vt-photo]").forEach((el) => {
        el.style.viewTransitionName = "";
      });
      event.currentTarget.setAttribute("data-vt-photo", "");
      event.currentTarget.style.viewTransitionName = transitionName;
    }}
  >
    {children}
  </Link>
);

export default PhotoLink;
