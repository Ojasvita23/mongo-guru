import React from "react";

const QuestionsList = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;



  return <div>QuestionsList - topic: {slug}</div>;
};

export default QuestionsList;
