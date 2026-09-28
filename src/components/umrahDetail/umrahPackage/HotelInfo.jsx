"use client";

import React, { useState } from "react";
import { MdCheck, MdExpandMore } from "react-icons/md";

// Highlight chips plus the hotel description from the reference documents.
// The first paragraph is always visible; the rest sit behind "Read more"
// because several hotels carry five paragraphs of copy.
const HotelInfo = ({ info }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!info) return null;

  const { highlights = [], description = [] } = info;
  const [lead, ...rest] = description;

  if (!highlights.length && !lead) return null;

  return (
    <div className="flex flex-col gap-4">
      {highlights.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-1.5 rounded-full border border-line bg-sand px-3 py-1 text-xs font-semibold text-ink/80"
            >
              <MdCheck className="text-gold-deep text-sm shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {lead && (
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-ink/70">{lead}</p>

          {isExpanded &&
            rest.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-ink/70"
              >
                {paragraph}
              </p>
            ))}

          {rest.length > 0 && (
            <button
              type="button"
              onClick={() => setIsExpanded((value) => !value)}
              aria-expanded={isExpanded}
              className="flex items-center gap-1 self-start text-sm font-semibold text-gold-deep cursor-pointer hover:underline"
            >
              {isExpanded ? "Read less" : "Read more"}
              <MdExpandMore
                className={`text-base transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HotelInfo;
