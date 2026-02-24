import React from "react";

const TermCard = ({ data }) => {
  return (
    <section>
      <h1 className="text-2xl font-bold  text-primary">{data.heading}</h1>
      <p>{data.content}</p>
    </section>
  );
};

export default TermCard;
