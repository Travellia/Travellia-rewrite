"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Photo frame that opens like a window the first time it scrolls into view:
 * the clip widens from a slight inset to the full frame while the photo
 * inside settles from 112% to 100% (.unveil in globals.css).
 *
 * For large editorial photos only; text and card grids are not animated.
 * `radius` must match the frame's corner radius. Reduced motion shows the
 * photo as is.
 */
const Unveil = ({ as: Tag = "div", radius = "28px", className, style, children, ...props }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ "--unveil-radius": radius, ...style }}
      className={cn("unveil", visible && "is-visible", className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Unveil;
