import React from "react";

const TermCard = ({ data }) => {
  return (
    <section className="flex flex-col gap-2 border-t border-line pt-5">
      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
        {data.heading}
      </h3>
      <p className="leading-relaxed text-ink/75">{data.content}</p>
    </section>
  );
};

export default TermCard;
