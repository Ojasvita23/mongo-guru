"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./styles.css";

const QuestionPage = ({
  params,
}: {
  params: { slug: string; questionId: string };
}) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("resolvedParams = ", params);
    };

    fetchData();
  }, [params]);

  return (
    <div className="questionPage">
      <div className="questionPage__heading">
        <h2>1. What is the capital of France?</h2>
      </div>

      <div className="questionPage__body">
        <div className="questionPage__body__left">
          <div className="questionPage__body__left__heading">
            Current Data in Database
          </div>
          <div className="questionPage__body__left__content">
            this is how data looks
          </div>
          <div className="questionPage__body__left__btn__container">
            <button
              className="questionPage__body__left__button"
              onClick={() => router.back()}
            >
              <span>Back to Questions</span>
            </button>
          </div>
        </div>

        {/* mongo shell */}
        <div className="questionPage__body__right">
          <div className="questionPage__body__left__heading">Mongo Shell</div>

          <div className="questionPage__body__right__content">
            <div className="questionPage__body__right__content__input">
              <label>
                <textarea
                  className="textarea"
                  autoFocus
                  name="postContent"
                  rows={10}
                  cols={70}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>
            <div className="questionPage__body__right__content__output">
              <span>Output</span>
            </div>
          </div>

          <div className="questionPage__body__right__btn__container">
            <button
              className="questionPage__body__button__reset"
              onClick={() => setQuery("")}
            >
              <span>Reset</span>
            </button>
            <button
              className="questionPage__body__button__submit"
              onClick={() => {
                console.log("Submitted Query:", query);
              }}
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
