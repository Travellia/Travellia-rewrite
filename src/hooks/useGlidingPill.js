"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/**
 * Position of one highlight pill that glides between the items of a list
 * (navbar links, search tabs). Items carry `data-pill-key`; `activeKey` picks
 * the one to sit under.
 *
 * Returns `{ pill, style }`: `pill` is null until measured (style the active
 * item directly until then, so the first paint is right without JS), and
 * `style` is ready to spread onto the absolutely positioned pill element.
 * The pill only animates after its first placement, so it never slides in
 * from the edge on page load.
 */
const useGlidingPill = (listRef, activeKey) => {
  const [pill, setPill] = useState(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const el =
        activeKey != null &&
        list.querySelector(`[data-pill-key="${CSS.escape(String(activeKey))}"]`);
      if (!el) {
        setPill(null);
        return;
      }
      // Measured against the list itself, whatever the item's offsetParent.
      const x =
        el.getBoundingClientRect().left -
        list.getBoundingClientRect().left -
        list.clientLeft;
      setPill({ x, w: el.offsetWidth });
    };
    measure();
    // Re-measure when fonts load or the layout changes size.
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [listRef, activeKey]);

  useEffect(() => {
    if (!pill || ready) return;
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, [pill, ready]);

  const style = pill
    ? {
        width: pill.w,
        transform: `translateX(${pill.x}px)`,
        transition: ready
          ? "transform var(--motion-ui) var(--motion-glide), width var(--motion-ui) var(--motion-glide)"
          : "none",
      }
    : undefined;

  return { pill, style };
};

export default useGlidingPill;
