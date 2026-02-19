import React from "react";

const QuestionCard = ({ data }) => {
  return (
    <div className="flex flex-col item-center justify-center gap-5 rounded-2xl shadow p-10 text-center shadow-2xl">
      <h1 className="text-primary text-xl  ">{data.question}</h1>
      <p className="">{data.answer}</p>
    </div>
  );
};

export default QuestionCard;
