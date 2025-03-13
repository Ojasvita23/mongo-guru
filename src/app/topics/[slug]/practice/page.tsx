"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ContentView } from "@/components/contentView";
import { text } from "@/constants/text";
import { capitalizeFirstLetter } from "@/utils/textFormatting";
import { questions } from "./constants";
import "./styles.css";

const QuestionsList = ({ params }: { params: { slug: string } }) => {
  const [slug, setSlug] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const slugValue = resolvedParams.slug;
      setSlug(slugValue);
    };

    fetchData();
  }, [params]);

  const heading = capitalizeFirstLetter(slug.replace("-", " "));

  const content = () => {
    return (
      <>
        <h2 className="container__body__content__heading">{text.questions}</h2>
        <ol start={1}>
          {questions.map((question) => (
            <li key={question.id}>{question.question}</li>
          ))}
        </ol>
      </>
    );
  };

  return (
    <ContentView
      heading={heading}
      content={content()}
      buttonText="Back to Theory"
        buttonOnClick={() => router.back()}
    />
  );
};

export default QuestionsList;
