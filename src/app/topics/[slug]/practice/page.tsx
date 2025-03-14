"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ContentView } from "@/components/contentView";
import { text } from "@/constants/text";
import { capitalizeFirstLetter } from "@/utils/textFormatting";
import "./styles.css";
import Link from "next/link";
import { IQuestion } from "@/backend/models/types";

const QuestionsList = ({ params }: { params: { slug: string } }) => {
  const [slug, setSlug] = useState<string>("");
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const slugValue = resolvedParams.slug;
      setSlug(slugValue);

      const response = await fetch(`/api/questions?topicId=${slugValue}`);
      const data = await response.json();
      if (data.success) {
        setQuestions(data.data);
      }
    };

    fetchData();
  }, [params]);

  const heading = capitalizeFirstLetter(slug.replace("-", " "));

  const content = () => {
    return (
      <>
        <h2 className="container__body__content__heading">{text.questions}</h2>
        <ol start={1} className="container__body__content__questionsList">
          {questions.map((question) => (
            <Link
              className="container__body__content__questionsList__item"
              href={`/topics/${slug}/practice/${question.id}`}
            >
              <li key={question.id}>{question.question}</li>
            </Link>
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
